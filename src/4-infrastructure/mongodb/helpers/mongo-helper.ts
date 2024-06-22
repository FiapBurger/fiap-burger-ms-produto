import { MongoClient, type Collection, type WithId } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,

  async connection (url: string): Promise<void> {
    this.client = await MongoClient.connect(url)
  },
  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection as WithId<Document>
    return ({ ...collectionWithoutId, id: _id }) as unknown
  }
}