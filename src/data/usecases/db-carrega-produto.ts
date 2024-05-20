import { type CadastraProdutoModel, type CadastroProduto } from '../../domain/usecases/cadastro-produto'
import { type ProdutoModel } from '../../domain/models/produto'
import { type CadastraProdutoRepository } from './protocols/cadastra-produto-repository'

export class DbCarregaProduto implements CadastroProduto {
  private readonly cadastraProdutoRepository: CadastraProdutoRepository

  constructor (cadastraProdutoRepository: CadastraProdutoRepository) {
    this.cadastraProdutoRepository = cadastraProdutoRepository
  }

  async carregaProduto (produto: CadastraProdutoModel): Promise<ProdutoModel> {
    return await this.cadastraProdutoRepository.cadastrar(produto)
  }
}
