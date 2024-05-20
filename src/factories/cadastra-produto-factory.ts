import { CadastraProdutoController } from '../presentation/controllers/cadastra-produto-controller'
import { DbAdicionaProduto } from '../data/usecases/db-adiciona-produto'
import { ProdutoMongoRepository } from '../infra/db/mongodb/produto-mongo-repository'

export const makeCadastraProdutoController = (): CadastraProdutoController => {
  const produtoMongoRepository = new ProdutoMongoRepository()
  const dbAdicionaProduto = new DbAdicionaProduto(produtoMongoRepository)
  return new CadastraProdutoController(dbAdicionaProduto)
}
