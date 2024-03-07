import { Request, Response } from "express";
import VoteService from "../services/VoteService";

export default new class VoteController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;
            const vote = await VoteService.create(data);

            return res.status(201).json(data);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
}