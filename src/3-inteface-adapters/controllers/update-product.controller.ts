import { type UpdateProductUseCase } from '../../2-application/usecases/update-product.usecase'
import { type Controller } from './interface/controller.interface'
import { type HttpResponse } from './interface/http.interface'
import { badRequest, ok } from '../helpers/http.helpers'
import { type Request } from 'express'

export class UpdateProductController implements Controller {
  constructor (private readonly updateProductUseCase: UpdateProductUseCase) {}

  async handle (req: Request): Promise<HttpResponse> {
    try {
      console.log('UpdateProductController:', req)
      const { id } = req.params
      const product = req.body

      await this.updateProductUseCase.execute(id, product)
      return ok()
    } catch (error) {
      return badRequest(error.message)
    }
  }
}
