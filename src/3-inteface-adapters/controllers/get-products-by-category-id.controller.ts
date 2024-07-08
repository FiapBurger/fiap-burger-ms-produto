import { type Request } from 'express'
import { type GetProductsByCategoryUseCase } from '../../2-application/ports/input/get-products-by-category-usecase.interface'
import { type Controller } from './interface/controller.interface'
import { type HttpResponse } from './interface/http.interface'
import { badRequest, ok } from './helpers/http.helpers'

export class GetProductsByCategoryController implements Controller {
  constructor (private readonly getProductsByCategoryUseCase: GetProductsByCategoryUseCase) {}

  async handle (req: Request): Promise<HttpResponse> {
    if (!req.params?.id_category) {
      return badRequest(new Error('ID da categoria não definido'))
    }

    try {
      const { id_category } = req.params
      const products = await this.getProductsByCategoryUseCase.execute(id_category)
      return ok(products)
    } catch (error) {
      return badRequest(error.message)
    }
  }
}
