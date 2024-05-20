import { type HttpResponse } from '../protocols/http'
import { badRequest, internalServerError } from '../helpers/http-helper'
import { MissingParamError, ServerError } from '../errors/errors'
import { type Controller } from '../protocols/controller'
import { type CadastroProduto } from '../../domain/usecases/cadastro-produto'

export class CarregaProdutoController implements Controller {
  private readonly cadastraProduto: CadastroProduto

  constructor (cadastraProduto: CadastroProduto) {
    this.cadastraProduto = cadastraProduto
  }

  async handle (request: CarregaProdutoController.Request): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      if (!id) {
        return badRequest(new MissingParamError('id'))
      }

      if (!ObjectId.isValid(id)) {
        return badRequest(new Error('Invalid id format'))
      }

      const produto = await this.carregaProduto.carregar(id)

      if (!produto) {
        return notFound(new Error('Produto not found'))
      }

      return ok(produto)
    } catch (e) {
      return internalServerError(new ServerError())
    }
  }
}

export namespace CarregaProdutoController {
  export type Request = {
    produtoId: string
  }
}
