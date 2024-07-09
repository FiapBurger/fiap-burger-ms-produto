import { type Request } from 'express'
import { type Controller } from './interface/controller.interface'
import { type HttpResponse } from './interface/http.interface'
import { ok } from './helpers/http.helpers'

export class HealthCheckController implements Controller {
  async handle (req: Request): Promise<HttpResponse> {
    return ok('A aplicação está saudavel')
  }
}
