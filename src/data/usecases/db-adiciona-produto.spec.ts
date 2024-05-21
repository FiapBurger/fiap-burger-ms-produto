import { DbAdicionaProduto } from './db-adiciona-produto'
import { type ProdutoModel } from '../../domain/models/produto'
import { type CadastraProdutoModel } from '../../domain/interfaces/cadastro-produto'
import { type CadastraProdutoRepository } from './protocols/cadastra-produto-repository'

describe('DbAdicionaProduto UseCase', () => {
  interface SutTypes {
    sut: DbAdicionaProduto
    cadastraProdutoRepositoryStub: CadastraProdutoRepository
  }

  const makeSut = (): SutTypes => {
    const cadastraProdutoRepositoryStub = makeCadastraProdutoRepository()
    const sut = new DbAdicionaProduto(cadastraProdutoRepositoryStub)
    return { sut, cadastraProdutoRepositoryStub }
  }

  const makeCadastraProdutoRepository = (): CadastraProdutoRepository => {
    class CadastraProdutoRepositoryStub implements CadastraProdutoRepository {
      async cadastrar (produto: CadastraProdutoModel): Promise<ProdutoModel> {
        const fakeProduto = {
          id: 'id_valido',
          nome: produto.nome || 'nome_valido',
          preco: produto.preco || 'preco_valido',
          id_categoria: produto.id_categoria || 'id_categoria_valido',
          url_imagem: produto.url_imagem || 'url_imagem_valido',
          descricao: produto.descricao ?? 'descricao_any'
        }
        return await new Promise(resolve => { resolve(fakeProduto) })
      }
    }
    return new CadastraProdutoRepositoryStub()
  }

  test('Deve chamar produtoRepository com os valores corretos', async () => {
    const { sut, cadastraProdutoRepositoryStub } = makeSut()
    const cadastraSpy = jest.spyOn(cadastraProdutoRepositoryStub, 'cadastrar')
    const dadosProduto = {
      id: 'id_valido',
      nome: 'nome_valido',
      preco: 'preco_valido',
      id_categoria: 'id_categoria_valido',
      url_imagem: 'url_imagem_valido',
      descricao: 'descricao_any'
    }
    await sut.cadastrar(dadosProduto)
    expect(cadastraSpy).toHaveBeenCalledWith({
      id: 'id_valido',
      nome: 'nome_valido',
      preco: 'preco_valido',
      id_categoria: 'id_categoria_valido',
      url_imagem: 'url_imagem_valido',
      descricao: 'descricao_any'
    })
  })
})
