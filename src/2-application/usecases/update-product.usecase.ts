import { type Product } from '../../1-entities/product.entity'
import { type ProductRepository } from '../interfaces/product-repository.interface'

export class UpdateProductUseCase {
  constructor (private readonly productRepository: ProductRepository) {}

  async execute (id: string, product: Product): Promise<void> {
    await this.productRepository.updateProduct(id, product)
  }
}
