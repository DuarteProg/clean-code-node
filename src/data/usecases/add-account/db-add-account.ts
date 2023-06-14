import {
  AddAccount,
  AddAccountModel,
  AccountModel,
  Encrypter,
} from "./db-add-account-protocols";

export class DbAddAccount implements AddAccount {
  constructor(private readonly encrypter: Encrypter) {}

  async add(account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password);
    const newAccount: AccountModel = {
      id: "1",
      name: account.name,
      email: account.email,
      password: account.password,
    };

    return new Promise((resolve) => resolve(newAccount));
  }
}
