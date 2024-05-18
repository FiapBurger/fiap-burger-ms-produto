import { type Controller } from '../presentation/protocols/controller'
import { type Request, type Response } from 'express'
import { type HttpRequest } from '../presentation/protocols/http'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpReponse = await controller.handle(httpRequest)
    res.status(httpReponse.statusCode).json(httpReponse.body)
  }
}
