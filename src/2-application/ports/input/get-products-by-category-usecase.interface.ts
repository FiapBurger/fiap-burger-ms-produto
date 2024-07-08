import { type Product } from '../../../1-entities/product.entity'

export interface GetProductsByCategoryUseCase {
  execute: (categoryId: string) => Promise<Product[]>
}
