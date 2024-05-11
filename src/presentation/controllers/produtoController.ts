import { produtoSchema } from '../../resources/schemas/request-produto-schema'
import { type HttpRequest, type HttpResponse } from '../protocols/http'
import { badRequest, created, internalServerError } from '../helpers/http-helper'
import { MissingParamError, ServerError } from '../errors/errors'
import { type Controller } from '../protocols/controller'
import { type CadastroProduto } from '../../domain/usecases/cadastro-produto'

export class ProdutoController implements Controller {
  private readonly cadastraProduto: CadastroProduto

  constructor (cadastraProduto: CadastroProduto) {
    this.cadastraProduto = cadastraProduto
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const { error } = produtoSchema.validate(httpRequest.body)
      if (error) {
        return badRequest(new MissingParamError(`${error.details['0'].path['0']}`))
      }
      this.cadastraProduto.cadastrar(httpRequest.body)
      return created('Produto cadastrado com sucesso!')
    } catch (e) {
      return internalServerError(new ServerError())
    }
  }
}
