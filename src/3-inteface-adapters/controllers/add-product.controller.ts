import { type AddProductUseCase } from '../../2-application/usecases/add-product.usecase'
import { type Product } from '../../1-entities/product.entity'
import { type Controller } from './interface/controller.interface'
import { type HttpRequest, type HttpResponse } from './interface/http.interface'
import { badRequest, ok } from '../helpers/http.helpers'

export class AddProductController implements Controller {
  constructor (private readonly addProductUseCase: AddProductUseCase) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      console.log('[1] - controller recebe request')
      if (!httpRequest.body) {
        throw new Error('Corpo da requisição não definido')
      }
      const { name, description, price, id_category, url_img } = httpRequest.body
      if (!name || !description || !price || !id_category || !url_img) {
        throw new Error('Todos os campos são obrigatórios')
      }

      const product: Product = {
        name,
        description,
        price,
        id_category,
        url_img
      }

      await this.addProductUseCase.execute(product)
      return ok()
    } catch (error) {
      console.error('Error:', error.message)
      return badRequest(error.message)
    }
  }
}
