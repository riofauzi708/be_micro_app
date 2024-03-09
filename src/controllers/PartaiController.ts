import { Request, Response } from "express";
import PartaiService from "../services/PartaiService";
import { PartaiValidator } from "../utils/validator/Partai";

export default new class PartaiController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;

            const {error, value} = PartaiValidator.validate(data)
            if(error) return res.status(400).json({message: error.details[0].message})

            const partai = await PartaiService.create(data);

            return res.status(201).json(data);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
    async find(req: Request, res: Response): Promise<Response> {
        try {
            const partais = await PartaiService.find();

            return res.status(201).json(partais);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
    async update(req: Request, res: Response): Promise<Response> {
        try {
          const id = parseInt(req.params.id);
          const { partaiName, leader, vision, address } = req.body;
    
          const partai = await PartaiService.update(id, partaiName, leader, vision, address);
    
          return res.status(200).json(partai);
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
          const id = parseInt(req.params.id);
    
          await PartaiService.delete(id);
    
          return res.status(200).json({ message: 'Partai deleted successfully' });
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      }
}