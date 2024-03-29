import { UserRepository } from "./ports/user-repository";
import { UserData } from "./user-data";

describe("Register user on mailing list use case", () => {
  test("should add user with complete data to mailing list", async () => {
    const users: UserData[] = [];
    const repo: UserRepository = new InMemoryUserRepository(users);
    const usecase: RegisterUserOnMainlingList = new RegisterUserOnMainlingList(
      repo
    );
    const name = "any_name";
    const email = "any@email.com";
    const response = await usecase.RegisterUserOnMainlingList({ name, email });
    const user = repo.findUserByEmail("any@email.com");
    expect((await user).name).toBe("any@email.com");
  });
});
