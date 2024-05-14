import { type CadastraProdutoModel } from '../../../domain/usecases/cadastro-produto'
import { type ProdutoModel } from '../../../domain/models/produto'

export interface CadastraProdutoRepository {
  cadastrar: (produto: CadastraProdutoModel) => Promise<ProdutoModel>
}
