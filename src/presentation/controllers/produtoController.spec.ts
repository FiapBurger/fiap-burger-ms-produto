import { ProdutoController } from './produtoController'
import { type HttpRequest } from '../protocols/http'
import { MissingParamError, ServerError } from '../errors/errors'
import { produtoSchema } from '../../resources/schemas/request-produto-schema'
import { type CadastraProdutoModel, type CadastroProduto } from '../../domain/usecases/cadastro-produto'
import { type ProdutoModel } from '../../domain/models/produto'

interface SutTypes {
  sut: ProdutoController
  cadastrar: CadastroProduto
}

const makeSut = (): SutTypes => {
  const cadastrar = makeCadastraProdutoStub()
  const sut = new ProdutoController(cadastrar)
  return { sut, cadastrar }
}

const makeCadastraProdutoStub = (): any => {
  class CadastraProdutoStub implements CadastroProduto {
    cadastrar (produto: CadastraProdutoModel): ProdutoModel {
      return {
        id: produto.id_categoria || 'id_valido',
        nome: produto.nome || 'nome_valido',
        preco: produto.preco || 'preco_valido',
        id_categoria: produto.id_categoria || 'id_categoria_valido',
        url_imagem: produto.url_imagem || 'url_imagem_valido',
        descricao: produto.descricao ?? 'descricao_any'
      }
    }
  }
  return new CadastraProdutoStub()
}

describe('Produto Controller', () => {
  describe('Salvar produto', () => {
    afterEach(() => {
      jest.restoreAllMocks()
    })

    test('Deve retornar 400 se algum campo obrigatórios estiverem faltando', () => {
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

      const httpResponse = sut.handle(httpRequest)

      expect(httpResponse.statusCode).toBe(400)
      expect(httpResponse.body).toEqual(new MissingParamError('preco'))
    })

    test('Deve retornar 500 ProdutoController lancar excessao ', () => {
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

      const validateSpy: jest.SpyInstance = jest.spyOn(produtoSchema, 'validate')
      validateSpy.mockImplementation(() => {
        throw new ServerError()
      })

      const httpResponse = sut.handle(httpRequest)
      expect(httpResponse.statusCode).toBe(500)
      expect(httpResponse.body).toEqual('Erro interno no servidor')
    })

    test('Deve retornar 201 se os dados forem providenciados', () => {
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
      const httpResponse = sut.handle(httpRequest)

      expect(httpResponse.statusCode).toBe(201)
      expect(httpResponse.body).toEqual('Produto cadastrado com sucesso!')
    })

    test('Deve cadastrar produto com os valores corretos', () => {
      const { sut, cadastrar } = makeSut()
      const cadastrarSpy = jest.spyOn(cadastrar, 'cadastrar')
      const httpRequest = {
        body: {
          nome: 'any_produto',
          preco: 'any_preco',
          id_categoria: 'any_id',
          url_imagem: 'any_url',
          descricao: 'any_descricao'
        }
      }

      sut.handle(httpRequest)

      expect(cadastrarSpy).toHaveBeenCalledWith({
        nome: 'any_produto',
        preco: 'any_preco',
        id_categoria: 'any_id',
        url_imagem: 'any_url',
        descricao: 'any_descricao'
      })
    })
  })
})
