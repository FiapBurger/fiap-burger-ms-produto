import { type Request } from 'express'
import { type UpdateProductUseCase } from '../../2-application/ports/input/update-product-usecase.interface'
import { type Controller } from './interface/controller.interface'
import { type HttpResponse } from './interface/http.interface'
import { badRequest, ok } from './helpers/http.helpers'

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
