import express, { type Express } from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

export const setupApp = async (): Promise<Express> => {
  const app = express()
  setupMiddlewares(app)
  await setupRoutes(app)
  return app
}
