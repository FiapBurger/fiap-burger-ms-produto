import { type CadastraProdutoModel } from '../../../domain/interfaces/cadastro-produto'
import { type ProdutoModel } from '../../../domain/models/produto'

export interface CadastraProdutoRepository {
  cadastrar: (produto: CadastraProdutoModel) => Promise<ProdutoModel>
}
