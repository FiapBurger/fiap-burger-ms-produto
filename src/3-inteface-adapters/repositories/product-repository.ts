import { type Product } from '../../1-entities/product.entity'
import { type ProductRepository } from '../../2-application/interfaces/product-repository.interface'
import { ProductMongoRepository } from '../../4-infrastructure/mongodb/repositories/product-mongo.repository'

export class ProductRepositoryImpl implements ProductRepository {
  private readonly productMongoRepository: ProductMongoRepository

  constructor () {
    this.productMongoRepository = new ProductMongoRepository()
  }

  async addProduct (product: Product): Promise<void> {
    await this.productMongoRepository.addProduct(product)
  }

  async getProductById (id: string): Promise<Product | null> {
    return await this.productMongoRepository.getProductById(id)
  }
}
