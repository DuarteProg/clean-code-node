import { MongoHelper} from "../helpers/mongo-helper";
import jestMongodbConfig from "../../../../../jest-mongodb-config";

describe("Account Mongo Repository", () => {
  
  beforeAll(async () => {
    await MongoHelper.connect(
      process.env.MONGO_URL ||
        `mongodb://localhost:27017/${jestMongodbConfig.mongodbMemoryServerOptions.instance.dbName}`
    );
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });
  test("Should return an account on success", async () => {
    const sut = new AccountMongoRepository();
    const account = await sut.add({
      name: "any_name",
      email: "any_email",
      password: "any_password",
    });
    expect(account).toBeTruthy();
    expect(account.id).toBeTruthy();
    expect(account.name).toBe("any_name");
    expect(account.email).toBe("any_email");
    expect(account.password).toBe("any_password");
  });
});
