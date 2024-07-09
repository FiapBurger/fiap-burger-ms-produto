import { type Express, Router } from 'express'
import { readdirSync } from 'fs'
import { resolve } from 'path'

export default async (app: Express): Promise<void> => {
  const router = Router()
  app.use(router)

  const routesPath = resolve(__dirname, '../routes')
  const routeFiles = readdirSync(routesPath)

  for (const file of routeFiles) {
    if (!/\.test\.|\.spec\./.test(file)) {
      try {
        const route = await import(resolve(routesPath, file))
        if (typeof route.default === 'function') {
          route.default(router)
        } else {
          console.error(`O arquivo ${file} não exporta uma função padrão`)
        }
      } catch (error) {
        console.error(`Erro ao importar o arquivo de rota ${file}:`, error)
      }
    }
  }
}
