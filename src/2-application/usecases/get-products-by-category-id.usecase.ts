import { type Product } from '../../1-entities/product.entity'
import { type ProductRepository } from '../interfaces/product-repository.interface'

export class GetProductsByCategoryUseCase {
  constructor (private readonly productRepository: ProductRepository) {}

  async execute (categoryId: string): Promise<Product[]> {
    return await this.productRepository.getProductsByCategory(categoryId)
  }
}
