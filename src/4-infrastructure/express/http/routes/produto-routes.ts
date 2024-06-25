import { type Router } from 'express'
import { adaptRoute } from '../../../../3-inteface-adapters/adapters/express-routes-adapter'
import {
  makeAddProductController,
  makeGetProductByIdController,
  makeGetAllProductsController,
  makeUpdateProductController,
  makeDeleteProductController,
  makeGetProductsByCategoryController
} from '../../../../3-inteface-adapters/factories'

export default (router: Router): void => {
  router.post('/produtos', adaptRoute(makeAddProductController()))
  router.get('/produtos/:id', adaptRoute(makeGetProductByIdController()))
  router.get('/produtos', adaptRoute(makeGetAllProductsController()))
  router.put('/produtos/:id', adaptRoute(makeUpdateProductController()))
  router.delete('/produtos/:id', adaptRoute(makeDeleteProductController()))
  router.get('/produtos/categoria/:id_category', adaptRoute(makeGetProductsByCategoryController()))
}
