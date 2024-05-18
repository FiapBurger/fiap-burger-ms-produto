import { ProdutoMongoRepository } from './produto-mongo-repository'
import { MongoHelper } from './helpers/mongo-helper'
import { env } from '../../../environments/environment'

describe('Produto Mongo Repository', () => {
  interface SutTypes {
    sut: ProdutoMongoRepository
  }

  beforeAll(async () => {
    await MongoHelper.connection(env.mongoUrl)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const produtoCollection = MongoHelper.getCollection('produtos')
    await produtoCollection.deleteMany({})
  })

  const makeSut = (): SutTypes => {
    const sut = new ProdutoMongoRepository()
    return { sut }
  }

  test('Deve retornar um produto em caso de sucesso', async () => {
    const { sut } = makeSut()
    const produto = await sut.cadastrar({
      // id: 'id_qualquer',
      nome: 'nome_qualquer',
      preco: 'preco_qualquer',
      id_categoria: 'id_categoria_qualquer',
      url_imagem: 'url_imagem_qualquer',
      descricao: 'descricao_qualquer'
    })

    expect(produto).toBeTruthy()
    expect(produto.id).toBeTruthy()
    expect(produto.nome).toBe('nome_qualquer')
    expect(produto.preco).toBe('preco_qualquer')
    expect(produto.id_categoria).toBe('id_categoria_qualquer')
    expect(produto.url_imagem).toBe('url_imagem_qualquer')
    expect(produto.descricao).toBe('descricao_qualquer')
  })
})
