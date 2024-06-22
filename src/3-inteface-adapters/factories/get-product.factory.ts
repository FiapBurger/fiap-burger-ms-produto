import { GetProductByIdUseCase } from '../../2-application/usecases/get-product-by-id.usecase'
import { ProductMongoRepository } from '../../4-infrastructure/mongodb/repositories/product-mongo.repository'
import { GetProductByIdController } from '../controllers/get-product-by-id.controller'

export const makeGetProductByIdController = (): GetProductByIdController => {
  const productRepository = new ProductMongoRepository()
  const getProductUseCase = new GetProductByIdUseCase(productRepository)
  return new GetProductByIdController(getProductUseCase)
}
