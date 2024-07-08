import request from 'supertest'
import { type Express } from 'express'
import { setupApp } from '../config/app'
let app: Express

describe('Body Parser Middleware', () => {
  beforeAll(async () => {
    app = await setupApp()
  })
  test('Deve passar o body como json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Alex' })
      .expect({ name: 'Alex' })
  })
})
