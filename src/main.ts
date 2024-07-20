import { env } from './4-infrastructure/environments/environment'
import { MongoHelper } from './4-infrastructure/mongodb/helpers/mongo-helper'

const startServer = async (): Promise<void> => {
  const { setupApp } = await import('./4-infrastructure/express/http/config/app')
  const app = await setupApp()
  app.listen(env.port, () => {
    console.log(`Servidor rodando em http://localhost:${env.port}`)
  })
}

const connectToMongo = async (): Promise<void> => {
  try {
    await MongoHelper.connection(env.mongoUrl)
    console.log('Conectado ao MongoDB com sucesso')
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message)
    console.error('Tentando conectar novamente em 5 segundos...')
    setTimeout(connectToMongo, 5000)
  }
}

startServer()
  .then(() => {
    console.log('Servidor iniciado')
    void connectToMongo()
  })
  .catch((error) => {
    console.error('Erro ao iniciar o servidor:', error.message)
    console.error('Detalhes do erro:', error)
  })
