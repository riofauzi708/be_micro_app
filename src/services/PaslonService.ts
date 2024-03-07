import { AppDataSource } from "../data-source";
import { Paslon } from "../entity/Paslon";
import { IPaslon } from "../interfaces/IPaslon";

export default class PaslonService {
    static async create(reqBody: IPaslon): Promise<Paslon> {
        try {
            const repository = AppDataSource.getRepository(Paslon);

            const paslon = repository.create({
                paslonName: reqBody.paslonName,
                number: reqBody.number,
                vision: reqBody.vision
            });

            await AppDataSource.createQueryBuilder()
                .insert()
                .into(Paslon)
                .values(reqBody)
                .execute();

            console.log(reqBody);
            
            return paslon; 
        } catch (error) {
            throw error;
        }
    }
    static async find() {
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
}