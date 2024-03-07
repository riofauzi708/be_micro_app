import { Request, Response } from "express";
import PartaiService from "../services/PartaiService";

export default new class PartaiController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;
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
}