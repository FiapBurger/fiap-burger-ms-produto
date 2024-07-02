import { type Product } from '../../1-entities/product.entity'
import { type ProductRepository } from '../interfaces/product-repository.interface'

export class GetAllProductsUseCase {
  constructor (private readonly productRepository: ProductRepository) {}

  async execute (): Promise<Product[]> {
    return await this.productRepository.getAllProducts()
  }
}
