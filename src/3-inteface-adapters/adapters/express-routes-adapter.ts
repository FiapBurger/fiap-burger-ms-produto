import { type Request, type Response } from 'express'
import { type HttpRequest } from '../controllers/interface/http.interface'
import { type Controller } from '../controllers/interface/controller.interface'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body ?? {},
      params: req.params ?? {},
      query: req.query ?? {}
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
