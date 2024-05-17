import request from 'supertest'
import app from '../config/app'

describe('Produto Routes', () => {
  test('Devera retornar um produto em caso de sucesso', async () => {
    await request(app)
      .post('/produto')
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
