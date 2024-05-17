import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
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
