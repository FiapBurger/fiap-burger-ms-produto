import { type Request } from 'express'
import { type Product } from '../../1-entities/product.entity'
import { type AddProductUseCase } from '../../2-application/ports/input/add-product-usecase.interface'
import { type Controller } from './interface/controller.interface'
import { type HttpResponse } from './interface/http.interface'
import { badRequest, ok } from './helpers/http.helpers'

export class AddProductController implements Controller {
  constructor (private readonly addProductUseCase: AddProductUseCase) {}

  async handle (req: Request): Promise<HttpResponse> {
    console.log('[1] - controller recebe request')

    if (!req.body) {
      return badRequest(new Error('Corpo da requisição não definido'))
    }

    const { name, description, price, id_category, url_img } = req.body

    if (!name || !description || !price || !id_category || !url_img) {
      return badRequest(new Error('Todos os campos são obrigatórios'))
    }

    const product: Product = {
      name,
      description,
      price,
      id_category,
      url_img
    }

    try {
      await this.addProductUseCase.execute(product)
      return ok()
    } catch (error) {
      console.error('Error:', error.message)
      return badRequest(error.message)
    }
  }
}
