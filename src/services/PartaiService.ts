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
      static async update(id: number, partaiName: string, leader: string, vision: string, address: string): Promise<Partai | undefined> {
        try {
          const partaiRepository = AppDataSource.getRepository(Partai);
    
          const partai = await partaiRepository.findOne({ where: { id } });
    
          if (!partai) {
            throw new Error("Partai not found");
          }

          partai.partaiName = partaiName,
          partai.leader = leader,
          partai.vision = vision,
          partai.address = address
    
          const updatedPartai = await partaiRepository.save(partai);
    
          return updatedPartai;
        } catch (error) {
          throw error;
        }
      }
    
      static async delete(id: number): Promise<void> {
        try {
          const partaiRepository = AppDataSource.getRepository(Partai);
    
          const partai = await partaiRepository.findOne({ where: { id } });
    
          if (!partai) {
            throw new Error("Partai not found");
          }
    
          await partaiRepository.remove(partai);
        } catch (error) {
          throw error;
        }
      }
}