import { type Product } from '../../../1-entities/product.entity'

export interface ProductRepository {
  addProduct: (product: Product) => Promise<Product>
  getProductById: (id: string) => Promise<Product | null>
  getAllProducts: () => Promise<Product[] | null>
  updateProduct: (id: string, product: Product) => Promise<void>
  deleteProduct: (id: string) => Promise<void>
  getProductsByCategory: (categoryId: string) => Promise<Product[]>
}
