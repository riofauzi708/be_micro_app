import { Request, Response } from "express";
import UserService from "../services/UserService";
import { User } from "../entity/User";

export default new class UserController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;
            const user = await UserService.create(data);

            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }

    async find(req: Request, res: Response): Promise<Response> {
        try {
            const users = await UserService.find();

            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
          const id = parseInt(req.params.id);
          const { username, password } = req.body;
    
          const user = await UserService.update(id, username, password);
    
          return res.status(200).json(user);
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
          const id = parseInt(req.params.id);
    
          await UserService.delete(id);
    
          return res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      }
}
