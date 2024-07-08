import { type Product } from '../../../1-entities/product.entity'

export interface UpdateProductUseCase {
  execute: (id: string, product: Product) => Promise<void>
}
