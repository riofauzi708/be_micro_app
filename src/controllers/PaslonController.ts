import { Request, Response } from "express";
import PaslonService from "../services/PaslonService";

export default new class PaslonController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;
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
}