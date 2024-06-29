import { type Request } from 'express'
import { type GetProductByIdUseCase } from '../../2-application/usecases/get-product-by-id.usecase'
import { type Controller } from './interface/controller.interface'
import { badRequest, ok } from './helpers/http.helpers'
import { type HttpResponse } from './interface/http.interface'

export class GetProductByIdController implements Controller {
  constructor (private readonly getProductByIdUseCase: GetProductByIdUseCase) {}

  async handle (req: Request): Promise<HttpResponse> {
    try {
      const { id } = req.params
      const product = await this.getProductByIdUseCase.execute(id)
      return ok(product)
    } catch (error) {
      return badRequest(error.message)
    }
  }
}
