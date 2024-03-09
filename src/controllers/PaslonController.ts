import { Request, Response } from "express";
import PaslonService from "../services/PaslonService";
import { PaslonValidator } from "../utils/validator/Paslon";

export default new class PaslonController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;

            const {error, value} = PaslonValidator.validate(data)
            if(error) return res.status(400).json({message: error.details[0].message})

            const paslon = await PaslonService.create(data);

            return res.status(201).json(data);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
    async find(req: Request, res: Response): Promise<Response> {
        try {
            const paslons = await PaslonService.find();

            return res.status(200).json(paslons);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
    async update(req: Request, res: Response): Promise<Response> {
        try {
          const id = parseInt(req.params.id);
          const { paslonName, number, vision } = req.body;
    
          const paslon = await PaslonService.update(id, paslonName, number, vision);
    
          return res.status(200).json(paslon);
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
          const id = parseInt(req.params.id);
    
          await PaslonService.delete(id);
    
          return res.status(200).json({ message: 'Paslon deleted successfully' });
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      }
}