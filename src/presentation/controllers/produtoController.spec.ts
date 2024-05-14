import { ProdutoController } from './produtoController'
import { type HttpRequest } from '../protocols/http'
import { MissingParamError, ServerError } from '../errors/errors'
import { type CadastraProdutoModel, type CadastroProduto } from '../../domain/usecases/cadastro-produto'
import { type ProdutoModel } from '../../domain/models/produto'

interface SutTypes {
  sut: ProdutoController
  cadastrarStub: CadastroProduto
}

const makeSut = (): SutTypes => {
  const cadastrarStub = makeCadastraProdutoStub()
  const sut = new ProdutoController(cadastrarStub)
  return { sut, cadastrarStub }
}

const makeCadastraProdutoStub = (): CadastroProduto => {
  class CadastraProdutoStub implements CadastroProduto {
    async cadastrar (produto: CadastraProdutoModel): Promise<ProdutoModel> {
      const fakeCadastro = {
        nome: produto.nome || 'nome_valido',
        preco: produto.preco || 'preco_valido',
        id_categoria: produto.id_categoria || 'id_categoria_valido',
        url_imagem: produto.url_imagem || 'url_imagem_valido',
        descricao: produto.descricao ?? 'descricao_any'
      }
      return await new Promise(resolve => { resolve(fakeCadastro) })
    }
  }
  return new CadastraProdutoStub()
}

describe('Produto Controller', () => {
  describe('Salvar produto', () => {
    afterEach(() => {
      jest.restoreAllMocks()
    })

    test('Deve retornar 400 se algum campo obrigatórios estiverem faltando', async () => {
      const { sut } = makeSut()
      const httpRequest: HttpRequest = {
        body: {
          nome: 'any_produto',
          // preco: 'item_obrigatorio',
          id_categoria: 'any_id',
          url_imagem: 'any_url',
          descricao: 'any_descricao'
        }
      }

      const httpResponse = await sut.handle(httpRequest)

      expect(httpResponse.statusCode).toBe(400)
      expect(httpResponse.body).toEqual(new MissingParamError('preco'))
    })

    test('Deve retornar 400 se um tipo de dado inesperado for fornecido', async () => {
      const { sut } = makeSut()
      const httpRequest: HttpRequest = {
        body: {
          nome: 'any_produto',
          preco: 100,
          id_categoria: 'any_id',
          url_imagem: 'any_url',
          descricao: 'any_descricao'
        }
      }

      const httpResponse = await sut.handle(httpRequest)

      expect(httpResponse.statusCode).toBe(400)
      expect(httpResponse.body).toEqual(new MissingParamError('preco'))
    })

    test('Deve retornar 201 se os dados forem providenciados', async () => {
      const { sut } = makeSut()
      const httpRequest = {
        body: {
          nome: 'any_produto',
          preco: 'any_preco',
          id_categoria: 'any_id',
          url_imagem: 'any_url',
          descricao: 'any_descricao'
        }
      }
      const httpResponse = await sut.handle(httpRequest)

      expect(httpResponse.statusCode).toBe(201)
      expect(httpResponse.body).toEqual('Produto cadastrado com sucesso!')
    })

    test('Deve chamar CadastroProduto com os valores corretos', async () => {
      const { sut, cadastrarStub } = makeSut()
      const cadastrarSpy = jest.spyOn(cadastrarStub, 'cadastrar')
      const httpRequest = {
        body: {
          nome: 'any_produto',
          preco: 'any_preco',
          id_categoria: 'any_id',
          url_imagem: 'any_url',
          descricao: 'any_descricao'
        }
      }

      await sut.handle(httpRequest)
      expect(cadastrarSpy).toHaveBeenCalledWith({
        nome: 'any_produto',
        preco: 'any_preco',
        id_categoria: 'any_id',
        url_imagem: 'any_url',
        descricao: 'any_descricao'
      })
    })

    test('Deve retornar 500 se CadastroProduto lancar excessao ', async () => {
      const { sut, cadastrarStub } = makeSut()
      jest.spyOn(cadastrarStub, 'cadastrar').mockImplementationOnce(async () => {
        return await new Promise((resolve, reject) => { reject(new ServerError()) })
      })
      const httpRequest = {
        body: {
          nome: 'any_produto',
          preco: 'any_preco',
          id_categoria: 'any_id',
          url_imagem: 'any_url',
          descricao: 'any_descricao'
        }
      }
      const httpResponse = await sut.handle(httpRequest)
      expect(httpResponse.statusCode).toBe(500)
      expect(httpResponse.body).toEqual('Erro interno no servidor')
    })
  })
})
