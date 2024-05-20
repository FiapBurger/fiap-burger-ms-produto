export const env = {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://mongo:27017/produto-mongo-db',
  // mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:27017/produto-mongo-db',
  port: process.env.PORT ?? 5050
}
