import { ProductMongoRepository } from '../../../../mongodb/repositories/product-mongo.repository'
import { UpdateProductUseCase } from '../../../../../2-application/usecases/update-product.usecase'
import { UpdateProductController } from '../../../../../3-inteface-adapters/controllers/update-product.controller'

export const makeUpdateProductController = (): UpdateProductController => {
  const productRepository = new ProductMongoRepository()
  const updateProductUseCase = new UpdateProductUseCase(productRepository)
  return new UpdateProductController(updateProductUseCase)
}
