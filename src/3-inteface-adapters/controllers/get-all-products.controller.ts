import { type GetAllProductsUseCase } from '../../2-application/usecases/get-all-product.usecase'
import { type Controller } from './interface/controller.interface'
import { type HttpResponse } from './interface/http.interface'
import { badRequest, ok } from './helpers/http.helpers'

export class GetAllProductsController implements Controller {
  constructor (private readonly getAllProductsUseCase: GetAllProductsUseCase) {}

  async handle (): Promise<HttpResponse> {
    try {
      const products = await this.getAllProductsUseCase.execute()
      return ok(products)
    } catch (error) {
      return badRequest(error.message)
    }
  }
}
