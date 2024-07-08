import { type Product } from '../../../1-entities/product.entity'

export interface GetProductByIdUseCase {
  execute: (id: string) => Promise<Product | null>
}
