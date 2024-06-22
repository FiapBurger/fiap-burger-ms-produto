import { type Router } from 'express'
import { adaptRoute } from '../../../../3-inteface-adapters/adapters/express-routes-adapter'
import {
  makeAddProductController,
  makeGetProductByIdController
} from '../../../../3-inteface-adapters/factories'

export default (router: Router): void => {
  router.post('/produtos', adaptRoute(makeAddProductController()))
  router.get('/produtos/:id', adaptRoute(makeGetProductByIdController()))
}
