import { type Router } from 'express'

export default (router: Router): void => {
  router.post('/produtos', (req, res) => {
    res.json({ ok: 'ok' })
  })
}
