import { type Product } from '../../../1-entities/product.entity'

export interface GetAllProductsUseCase {
  execute: () => Promise<Product[]>
}
