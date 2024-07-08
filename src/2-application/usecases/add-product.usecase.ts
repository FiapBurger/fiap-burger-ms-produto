import { type Product } from '../../1-entities/product.entity'
import { type ProductRepository } from '../interfaces/product-repository.interface'

export class AddProductUseCase implements AddProductUseCase {
  constructor (private readonly productRepository: ProductRepository) {}

  async execute (product: Product): Promise<void> {
    console.log('[2] - usecase chama repository')
    await this.productRepository.addProduct(product)
  }
}
