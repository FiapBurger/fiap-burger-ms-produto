import { ProdutoController } from '../presentation/controllers/produtoController'
import { DbAdicionaProduto } from '../data/usecases/cadastraProduto/db-adiciona-produto'
import { ProdutoMongoRepository } from '../infra/db/mongodb/produto-mongo-repository'

export const makeProdutoController = (): ProdutoController => {
  const produtoMongoRepository = new ProdutoMongoRepository()
  const dbAdicionaProduto = new DbAdicionaProduto(produtoMongoRepository)
  return new ProdutoController(dbAdicionaProduto)
}
