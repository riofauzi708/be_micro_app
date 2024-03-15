import { AppDataSource } from "../data-source";
import { Paslon } from "../entity/Paslon";
import { IPaslon } from "../interfaces/IPaslon";

export default class PaslonService {
  static async create(reqBody: IPaslon): Promise<Paslon> {
    try {
      const repository = AppDataSource.getRepository(Paslon);

      const paslon = repository.create({
        paslonName: reqBody.paslonName,
        number: reqBody.number.toString(),
        vision: reqBody.vision
      });

      await repository.save(paslon);

      console.log(reqBody);

      return paslon;
    } catch (error) {
      throw error;
    }
  }

  static async find(): Promise<Paslon[]> {
    try {
      const paslons = await AppDataSource
        .getRepository(Paslon)
        .createQueryBuilder("paslon")
        .getMany();

      return paslons;
    } catch (error) {
      throw error;
    }
  }

  static async update(id: number, paslonName: string, number: number, vision: string): Promise<Paslon | undefined> {
    try {
      const paslonRepository = AppDataSource.getRepository(Paslon);

      const paslon = await paslonRepository.findOne({ where: { id } });

      if (!paslon) {
        throw new Error("Paslon not found");
      }

      paslon.paslonName = paslonName;
      paslon.number = number.toString();
      paslon.vision = vision;

      const updatedPaslon = await paslonRepository.save(paslon);

      return updatedPaslon;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id: number): Promise<void> {
    try {
      const paslonRepository = AppDataSource.getRepository(Paslon);

      const paslon = await paslonRepository.findOne({ where: { id } });

      if (!paslon) {
        throw new Error("Paslon not found");
      }

      await paslonRepository.remove(paslon);
    } catch (error) {
      throw error;
    }
  }
}