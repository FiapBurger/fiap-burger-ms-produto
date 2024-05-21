import { type CadastraProdutoModel, type CadastroProduto } from '../../domain/interfaces/cadastro-produto'
import { type ProdutoModel } from '../../domain/models/produto'
import { type CadastraProdutoRepository } from './protocols/cadastra-produto-repository'

export class DbAdicionaProduto implements CadastroProduto {
  private readonly cadastraProdutoRepository: CadastraProdutoRepository

  constructor (cadastraProdutoRepository: CadastraProdutoRepository) {
    this.cadastraProdutoRepository = cadastraProdutoRepository
  }

  async cadastrar (produto: CadastraProdutoModel): Promise<ProdutoModel> {
    try {
      return await this.cadastraProdutoRepository.cadastrar(produto)
    } catch (error) {
      console.error('Erro:', error);
    }
  }
}
