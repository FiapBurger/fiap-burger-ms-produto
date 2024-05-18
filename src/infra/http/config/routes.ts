import { type Express, Router } from 'express'
import { readdirSync } from 'fs'

export default async (app: Express): Promise<void> => {
  const router = Router()
  app.use(router)

  readdirSync(`${__dirname}` + '/../routes').map(async file => {
    if (!/\.test\.|\.spec\./.test(file)) {
      (await import('../routes/' + `${file}`)).default(router)
    }
  })
}
