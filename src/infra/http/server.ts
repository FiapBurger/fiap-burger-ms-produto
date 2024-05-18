import { MongoHelper } from '../db/mongodb/helpers/mongo-helper'
import { env } from '../../environments/environment'

MongoHelper.connection(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(env.port, () => { console.log(`Servidor rodando em ${env.mongoUrl}:${env.port}`) })
  })
  .catch(console.error)
