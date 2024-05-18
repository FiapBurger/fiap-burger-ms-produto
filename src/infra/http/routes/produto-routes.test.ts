import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../db/mongodb/helpers/mongo-helper'
import { env } from '../../../environments/environment'

describe('Produto Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connection(`${env.mongoUrl}`)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const produtoCollection = MongoHelper.getCollection('produtos')
    await produtoCollection.deleteMany({})
  })

  test('Devera retornar um produto em caso de sucesso', async () => {
    await request(app)
      .post('/produtos')
      .send({
        nome: 'nome_valido',
        preco: 'preco_valido',
        id_categoria: 'id_categoria_valido',
        url_imagem: 'url_imagem_valido',
        descricao: 'descricao_any'
      })
      .expect(200)
  })
})
