import { type HttpResponse } from './http.interface'
import { type Request } from 'express'

export interface Controller {
  handle: (req: Request) => Promise<HttpResponse>
}
