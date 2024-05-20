import { produtoSchema } from '../../resources/schemas/request-produto-schema'
import { type HttpRequest, type HttpResponse } from '../protocols/http'
import { badRequest, created, internalServerError } from '../helpers/http-helper'
import { MissingParamError, ServerError } from '../errors/errors'
import { type Controller } from '../protocols/controller'
import { type CadastroProduto } from '../../domain/usecases/cadastro-produto'

export class CadastraProdutoController implements Controller {
  private readonly cadastraProduto: CadastroProduto

  constructor (cadastraProduto: CadastroProduto) {
    this.cadastraProduto = cadastraProduto
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { nome, preco, id_categoria, url_imagem, descricao } = await produtoSchema.validateAsync(httpRequest.body)
      return await this.cadastraProduto.cadastrar({
        nome,
        preco,
        id_categoria,
        url_imagem,
        descricao
      }).then(() => {
        return created('Produto cadastrado com sucesso!')
      })
    } catch (e) {
      if (e.isJoi) {
        return badRequest(new MissingParamError(e.details['0'].path['0']))
      }
      return internalServerError(new ServerError())
    }
  }
}
