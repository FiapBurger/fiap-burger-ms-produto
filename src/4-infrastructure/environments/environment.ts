export const env = {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:27017/produto-mongo-mongodb',
  port: process.env.PORT ?? 5050
}
