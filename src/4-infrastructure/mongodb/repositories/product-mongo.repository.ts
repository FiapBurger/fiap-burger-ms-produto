import { MongoHelper } from '../helpers/mongo-helper'
import { ObjectId } from 'mongodb'
import { type Product } from '../../../1-entities/product.entity'
import { type ProductRepository } from '../../../2-application/interfaces/product-repository.interface'
import { type ProductDTO } from '../../../2-application/dtos/product.dto'

export class ProductMongoRepository implements ProductRepository {
  async addProduct (produtoData: ProductDTO): Promise<Product> {
    console.log('[3] - repository insere dado na base de dados')
    const produtoCollection = MongoHelper.getCollection('produtos')
    console.log('produtoCollection: ', produtoCollection)
    console.log('produtoData: ', produtoData)
    const result = await produtoCollection.insertOne(produtoData)
    console.log('produto a ser inserido:', result)
    const insertedProduto = await produtoCollection.findOne({
      _id: result.insertedId
    })
    const xablau = MongoHelper.map(insertedProduto)
    console.log('xablau', xablau)
    return xablau
  }

  async getProductById (id: string): Promise<Product | null> {
    const productCollection = MongoHelper.getCollection('produtos')
    const foundProduct = await productCollection.findOne({ _id: new ObjectId(id) })
    return foundProduct && MongoHelper.map(foundProduct)
  }
}
