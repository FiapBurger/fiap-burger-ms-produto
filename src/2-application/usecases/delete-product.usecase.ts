import { type ProductRepository } from '../interfaces/product-repository.interface'

export class DeleteProductUseCase {
  constructor (private readonly productRepository: ProductRepository) {}

  async execute (id: string): Promise<void> {
    await this.productRepository.deleteProduct(id)
  }
}
