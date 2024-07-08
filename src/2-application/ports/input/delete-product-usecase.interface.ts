import { Product } from '../../../1-entities/product.entity'

export interface AddProductUseCase {
  execute: (product: Product) => Promise<void>
}