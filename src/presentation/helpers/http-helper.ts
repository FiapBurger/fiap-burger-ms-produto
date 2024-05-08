import { type HttpResponse } from '../protocols/http'

export const badRequest = (param: Error): HttpResponse => ({
  statusCode: 400,
  body: param
})

export const created = (param: string): HttpResponse => ({
  statusCode: 201,
  body: `${param}`
})

export const internalServerError = (param: Error): HttpResponse => ({
  statusCode: 500,
  body: `${param.message}`
})
