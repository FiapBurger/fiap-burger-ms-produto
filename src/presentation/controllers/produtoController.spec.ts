import { ProdutoController } from './produtoController'

describe('Produto Controller', () => {
  describe('Salvar produto', () => {
    test('Deve retornar 400 se os campos obrigatórios estiverem faltando', () => {
      // Arrive
      const sut = new ProdutoController()
      const httpRequest = {
        body: {
          nome: 'any_produto',
          // preco: 'item-obrigatorio',
          id_categoria: 'any_id',
          url_imagem: 'any_url',
          descricao: 'any_descricao'
        }
      }

      // Act
      const httpResponse = sut.handle(httpRequest)

      // Asset
      expect(httpResponse.statusCode).toBe(400)
      expect(httpResponse.body).toEqual(new Error('Campo obrigatorio: preco'))
    })
  })
})
