import { type Router } from 'express'

export default (router: Router): void => {
  router.post('/produto', (req, res) => {
    res.json({ ok: 'ok' })
  })
}
