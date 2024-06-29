import { type HttpResponse } from '../interface/http.interface'

export const badRequest = (error?: Error): HttpResponse => ({
  statusCode: 400,
  body: new Error()
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new Error()
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new Error(error.stack)
})

export const ok = (data?: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})