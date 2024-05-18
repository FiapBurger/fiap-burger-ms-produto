import { type Router } from 'express'
import { adaptRoute } from '../../../adapters/express-routes-adapter'
import { makeProdutoController } from '../../../factories/produto'

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.post('/produtos', adaptRoute(makeProdutoController()))
}
