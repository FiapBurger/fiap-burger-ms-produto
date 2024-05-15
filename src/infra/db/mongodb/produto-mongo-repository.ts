import { type CadastraProdutoRepository } from '../../../data/usecases/protocols/cadastra-produto-repository'
import { type CadastraProdutoModel } from '../../../domain/usecases/cadastro-produto'
import { type ProdutoModel } from '../../../domain/models/produto'
import { MongoHelper } from './helpers/mongo-helper'

export class ProdutoMongoRepository implements CadastraProdutoRepository {
  async cadastrar (produtoData: CadastraProdutoModel): Promise<ProdutoModel> {
    const produtoCollection = MongoHelper.getCollection('produtos')
    const result = await produtoCollection.insertOne(produtoData)
    const produto = result.ops[0]
    const { _id, ...produtoSemId } = produto
    return Object.assign({}, produtoSemId, { id: _id }) as ProdutoModel
  }
}
