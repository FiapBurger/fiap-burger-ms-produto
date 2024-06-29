import { type DeleteProductUseCase } from '../../2-application/usecases/delete-product.usecase'
import { type Controller } from './interface/controller.interface'
import { badRequest, ok } from './helpers/http.helpers'
import { type Request } from 'express'
import { type HttpResponse } from './interface/http.interface'

export class DeleteProductController implements Controller {
  constructor (private readonly deleteProductUseCase: DeleteProductUseCase) {}

  async handle (req: Request): Promise<HttpResponse> {
    try {
      const { id } = req.params
      await this.deleteProductUseCase.execute(id)
      return ok()
    } catch (error) {
      return badRequest(error.message)
    }
  }
}
