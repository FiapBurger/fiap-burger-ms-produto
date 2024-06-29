import { ProductMongoRepository } from '../../../../mongodb/repositories/product-mongo.repository'
import { GetProductsByCategoryUseCase } from '../../../../../2-application/usecases/get-products-by-category-id.usecase'
import { GetProductsByCategoryController } from '../../../../../3-inteface-adapters/controllers/get-products-by-category-id.controller'

export const makeGetProductsByCategoryController = (): GetProductsByCategoryController => {
  const productRepository = new ProductMongoRepository()
  const getProductsByCategoryUseCase = new GetProductsByCategoryUseCase(productRepository)
  return new GetProductsByCategoryController(getProductsByCategoryUseCase)
}
