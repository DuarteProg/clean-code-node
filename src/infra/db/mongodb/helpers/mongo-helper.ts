import { MongoClient } from "mongodb";
import jestMongodbConfig from "../../../../../jest-mongodb-config";

export const MongoHelper = {
  client: MongoClient,

  async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(
      process.env.MONGO_URL ||
        `mongodb://localhost:27017/${jestMongodbConfig.mongodbMemoryServerOptions.instance.dbName}`
    );
  },

  async disconnect(): Promise<void> {
    await this.client.close();
  },
};
