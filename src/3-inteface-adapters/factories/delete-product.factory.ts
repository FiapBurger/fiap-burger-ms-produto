import { ProductMongoRepository } from '../../4-infrastructure/mongodb/repositories/product-mongo.repository'
import { DeleteProductUseCase } from '../../2-application/usecases/delete-product.usecase'
import { DeleteProductController } from '../controllers/delete-product.controller'

export const makeDeleteProductController = (): DeleteProductController => {
  const productRepository = new ProductMongoRepository()
  const deleteProductUseCase = new DeleteProductUseCase(productRepository)
  return new DeleteProductController(deleteProductUseCase)
}
