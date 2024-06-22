import { type Product } from '../../1-entities/product.entity'

export interface ProductRepository {
  addProduct: (product: Product) => Promise<Product>
  getProductById: (id: string) => Promise<Product | null>
}
