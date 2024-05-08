import { ProdutoController } from './produtoController'
import { type HttpRequest } from '../protocols/http'
import { MissingParamError, ServerError } from '../errors/errors'
import { produtoSchema } from '../../resources/schemas/request-produto-schema'

interface SutTypes {
  sut: ProdutoController
}

const makeSut = (): SutTypes => {
  const sut = new ProdutoController()
  return { sut }
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
  })
})
