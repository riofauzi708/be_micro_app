import { Request, Response } from "express";
import BlogService from "../services/BlogService";
import { BlogValidator } from "../utils/validator/Blog";

export default new class BlogController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body;

            const {error, value} = BlogValidator.validate(data)
            if(error) return res.status(400).json({message: error.details[0].message})

            const blog = await BlogService.create(data);

            return res.status(201).json(data);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
    async find(req: Request, res: Response): Promise<Response> {
        try {
            const blogs = await BlogService.find();

            return res.status(200).json(blogs);
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
    async update(req: Request, res: Response): Promise<Response> {
        try {
          const id = parseInt(req.params.id);
          const { title, description } = req.body;
    
          const blog = await BlogService.update(id, title, description);
    
          return res.status(200).json(blog);
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
          const id = parseInt(req.params.id);
    
          await BlogService.delete(id);
    
          return res.status(200).json({ message: 'Blog deleted successfully' });
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      }
}