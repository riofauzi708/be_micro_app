import { AppDataSource } from "../data-source";
import { Vote } from "../entity/Vote";

export default class VoteService {
  static async create(reqBody: any): Promise<any> {
    try {
      const repository = AppDataSource.getRepository(Vote);

      const vote = repository.create({
        createdAt: reqBody.createdAt,
        postedAt: reqBody.postedAt
      });

      await repository.save(vote);

      console.log(reqBody);

      return vote;
    } catch (error) {
      console.error("Gagal membuat vote:", error);
      throw error;
    }
  }
}