import { AppDataSource } from "../data-source";
import { Partai } from "../entity/Partai";
import { IPartai } from "../interfaces/IPartai";

export default class PartaiService {
    static async create(reqBody: IPartai): Promise<Partai> {
        try {
            const repository = AppDataSource.getRepository(Partai);

            const partai = repository.create({
                partaiName: reqBody.partaiName,
                leader: reqBody.leader,
                vision: reqBody.vision,
                address: reqBody.address
            });

            await AppDataSource.createQueryBuilder()
                .insert()
                .into(Partai)
                .values(reqBody)
                .execute();

            console.log(reqBody);
            
            return partai; 
        } catch (error) {
            throw error;
        }
    }
    static async find() {
        try {
          const partais = await AppDataSource
            .getRepository(Partai)
            .createQueryBuilder("partai")
            .getMany();
    
          return partais;
        } catch (error) {
          throw error;
        }
      }
}