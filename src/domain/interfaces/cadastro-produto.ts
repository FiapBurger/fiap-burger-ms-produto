import { type ProdutoModel } from '../models/produto'

export interface CadastraProdutoModel {
  id?: string
  nome: string
  preco: string
  id_categoria: string
  url_imagem: string
  descricao?: string
}

export interface CadastroProduto {
  cadastrar: (produto: CadastraProdutoModel) => Promise<ProdutoModel>
}
