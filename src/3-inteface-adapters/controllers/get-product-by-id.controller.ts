import { type Request, type Response } from 'express'
import { type GetProductByIdUseCase } from '../../2-application/usecases/get-product-by-id.usecase'
import { type Controller } from './interface/controller.interface'

export class GetProductByIdController implements Controller {
  constructor (private readonly getProductByIdUseCase: GetProductByIdUseCase) {}

  async handle (req: Request, res: Response): Promise<void> {
    const { id } = req.params
    const product = await this.getProductByIdUseCase.execute(id)
    if (product) {
      res.status(200).json(product)
    } else {
      res.status(404).send()
    }
  }
}
