import { type Product } from '../../1-entities/product.entity'
import { type ProductRepository } from '../interfaces/product-repository.interface'

export class GetProductByIdUseCase {
  constructor (private readonly productRepository: ProductRepository) {}

  async execute (id: string): Promise<Product | null> {
    return await this.productRepository.getProductById(id)
  }
}
