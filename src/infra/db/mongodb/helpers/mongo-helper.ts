import { MongoClient, type Collection } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,

  async connection (uri: string): Promise<void> {
    this.client = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  }
}