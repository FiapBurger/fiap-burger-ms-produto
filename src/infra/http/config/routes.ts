import { type Express, Router } from 'express'
import fg from 'fast-glob'

export default async (app: Express): Promise<void> => {
  const router = Router()
  app.use(router)

  fg.sync('src/infra/http/routes/**routes.ts')
    .map(async file => (await import('../../../../' + `${file}`))
      .default(router))
}
