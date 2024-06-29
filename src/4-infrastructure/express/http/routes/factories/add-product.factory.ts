import { ProductMongoRepository } from '../../../../mongodb/repositories/product-mongo.repository'
import { AddProductUseCase } from '../../../../../2-application/usecases/add-product.usecase'
import { AddProductController } from '../../../../../3-inteface-adapters/controllers/add-product.controller'

export const makeAddProductController = (): AddProductController => {
  const productRepository = new ProductMongoRepository()
  const createProductUseCase = new AddProductUseCase(productRepository)
  return new AddProductController(createProductUseCase)
}
