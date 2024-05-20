import { MongoHelper as sut } from './mongo-helper'

describe('Mongo Helper', () => {
  beforeAll(async () => {
    await sut.connection(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('Deve reconectar caso mongodb perder conexão ', async () => {
    const produtoCollection = sut.getCollection('produtos')
    expect(produtoCollection).toBeTruthy()
  })
})
