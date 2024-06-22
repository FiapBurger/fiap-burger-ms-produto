import { ProductMongoRepository } from './product-mongo.repository'
import { MongoHelper } from '../helpers/mongo-helper'
import { env } from '../../environments/environment'

describe('Produto Mongo Repository', () => {
    interface SutTypes {
        sut: ProductMongoRepository
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
        const sut = new ProductMongoRepository()
        return { sut }
    }

    test('Deve retornar um produto em caso de sucesso', async () => {
        const { sut } = makeSut()
        const produto = await sut.addProduct({
            name: 'nome_qualquer',
            price: 'preco_qualquer',
            id_category: 'id_categoria_qualquer',
            url_img: 'url_imagem_qualquer',
            description: 'descricao_qualquer'
        })

        expect(produto).toBeTruthy()
        expect(produto.id).toBeTruthy()
        expect(produto.name).toBe('nome_qualquer')
        expect(produto.price).toBe('preco_qualquer')
        expect(produto.id_category).toBe('id_categoria_qualquer')
        expect(produto.url_img).toBe('url_imagem_qualquer')
        expect(produto.description).toBe('descricao_qualquer')
    })
})