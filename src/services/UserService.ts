import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { IUser } from "../interfaces/IUser";

export default class UserService {
  static async create(reqBody: IUser): Promise<User> {
    try {
      const repository = AppDataSource.getRepository(User);

      const user = new User();
      user.fullname = reqBody.fullname;
      user.address = reqBody.address;
      user.gender = reqBody.gender;
      user.username = reqBody.username;
      user.password = reqBody.password;

      await repository.save(user);

      console.log(user);

      return user;
    } catch (error) {
      throw error;
    }
  }
  static async find() {
    try {
      const users = await AppDataSource
        .getRepository(User)
        .createQueryBuilder("user")
        .getMany();

      return users;
    } catch (error) {
      throw error;
    }
  }
  static async update(id: number, username: string, password: string): Promise<User | undefined> {
    try {
      const userRepository = AppDataSource.getRepository(User);

      const user = await userRepository.findOne({ where: { id } });

      if (!user) {
        throw new Error("User not found");
      }

      user.username = username;
      user.password = password;

      const updatedUser = await userRepository.save(user);

      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id: number): Promise<void> {
    try {
      const userRepository = AppDataSource.getRepository(User);

      const user = await userRepository.findOne({ where: { id } });

      if (!user) {
        throw new Error("User not found");
      }

      await userRepository.remove(user);
    } catch (error) {
      throw error;
    }
  }
}