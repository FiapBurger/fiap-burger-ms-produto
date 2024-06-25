import { type GetProductsByCategoryUseCase } from '../../2-application/usecases/get-products-by-category-id.usecase'
import { type Controller } from './interface/controller.interface'
import { type HttpResponse } from './interface/http.interface'
import { badRequest, ok } from '../helpers/http.helpers'
import { type Request, type Response } from 'express'

export class GetProductsByCategoryController implements Controller {
  constructor (private readonly getProductsByCategoryUseCase: GetProductsByCategoryUseCase) {}

  async handle (req: Request, res: Response): Promise<HttpResponse> {
    try {
      if (!req.params || !req.params.id_category) {
        throw new Error('ID da categoria não definido')
      }

      const { id_category } = req.params

      const products = await this.getProductsByCategoryUseCase.execute(id_category)
      return ok(products)
    } catch (error) {
      return badRequest(error.message)
    }
  }
}
