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

  async getAllProducts (): Promise<Product[]> {
    return await this.productMongoRepository.getAllProducts()
  }

  async updateProduct (id: string, product: Product): Promise<void> {
    await this.productMongoRepository.updateProduct(id, product)
  }

  async deleteProduct (id: string): Promise<void> {
    await this.productMongoRepository.deleteProduct(id)
  }

  // async getProductsByCategory (categoryId: string): Promise<Product[]> {
  //   return await this.productMongoRepository.getProductsByCategory(categoryId)
  // }
}
