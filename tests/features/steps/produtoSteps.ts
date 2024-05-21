import { Given as Dado, When as Quando, Then as Entao, setDefaultTimeout } from '@cucumber/cucumber'
import { expect } from 'chai'
import request from 'supertest'
import app from '../../../src/infra/http/config/app'

setDefaultTimeout(60 * 1000)

let response: request.Response
const productDetails = {
  nome: 'any_produto',
  preco: '100',
  id_categoria: 'any_id',
  url_imagem: 'any_url',
  descricao: 'any_descricao'
}

Dado('que eu tenho os detalhes do produto', () => {
  // Os detalhes do produto já foram definidos acima
})

Quando('eu envio uma requisição POST para {string}', async (rota: string) => {
  response = await request(app)
    .post(rota)
    .send(productDetails)
    .set('Accept', 'application/json')
})

Entao('o status da resposta deve ser 201', () => {
  expect(201)
})

Entao('o corpo da resposta deve conter os detalhes do produto', () => {
  expect(response.body).to.include(productDetails)
})
