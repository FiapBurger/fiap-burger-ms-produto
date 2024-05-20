import { type CadastraProdutoController } from '../presentation/controllers/cadastra-produto-controller'
import { DbAdicionaProduto } from '../data/usecases/db-adiciona-produto'
import { ProdutoMongoRepository } from '../infra/db/mongodb/produto-mongo-repository'
import { CarregaProdutoController } from '../presentation/controllers/carrega-produto-controller'

export const makeCarregaProdutoController = (): CadastraProdutoController => {
  const produtoMongoRepository = new ProdutoMongoRepository()
  const dbAdicionaProduto = new DbAdicionaProduto(produtoMongoRepository)
  return new CarregaProdutoController(dbAdicionaProduto)
}
