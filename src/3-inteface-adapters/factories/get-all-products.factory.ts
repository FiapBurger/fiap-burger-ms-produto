import { ProductMongoRepository } from '../../4-infrastructure/mongodb/repositories/product-mongo.repository'
import { GetAllProductsUseCase } from '../../2-application/usecases/get-all-product.usecase'
import { GetAllProductsController } from '../controllers/get-all-products.controller'

export const makeGetAllProductsController = (): GetAllProductsController => {
  const productRepository = new ProductMongoRepository()
  const getAllProductsUseCase = new GetAllProductsUseCase(productRepository)
  return new GetAllProductsController(getAllProductsUseCase)
}
