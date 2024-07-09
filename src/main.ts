import { env } from './4-infrastructure/environments/environment'
import { MongoHelper } from './4-infrastructure/mongodb/helpers/mongo-helper'

MongoHelper.connection(env.mongoUrl)
  .then(async () => {
    const { setupApp } = await import('./4-infrastructure/express/http/config/app')
    const app = await setupApp()
    app.listen(env.port, () => {
      console.log(`Servidor rodando em http://localhost:${env.port}`)
    })
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error.message)
    console.error('Detalhes do erro:', error)
    process.exit(1)
  })
