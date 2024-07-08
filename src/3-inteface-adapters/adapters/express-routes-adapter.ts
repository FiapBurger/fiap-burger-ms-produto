import { type Request, type Response } from 'express'
import { type Controller } from '../controllers/interface/controller.interface'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle(req) // passe o req diretamente
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
