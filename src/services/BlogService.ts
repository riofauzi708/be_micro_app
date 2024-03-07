import { AppDataSource } from "../data-source";
import { Blog } from "../entity/Blog";
import { IBlog } from "../interfaces/IBlog";

export default class BlogService {
    static async find() {
        try {
          const blogs = await AppDataSource
            .getRepository(Blog)
            .createQueryBuilder("blog")
            .getMany();
    
          return blogs;
        } catch (error) {
          throw error;
        }
      }
    static async create(reqBody: IBlog): Promise<Blog> {
        try {
            const repository = AppDataSource.getRepository(Blog);

            const blog = repository.create({
                title: reqBody.title,
                description: reqBody.description
            });

            await AppDataSource.createQueryBuilder()
                .insert()
                .into(Blog)
                .values(reqBody)
                .execute();

            console.log(reqBody);
            
            return blog; 
        } catch (error) {
            throw error;
        }
    }
    static async update(id: number, title: string, description: string): Promise<Blog | undefined> {
        try {
          const userRepository = AppDataSource.getRepository(Blog);
    
          const blog = await userRepository.findOne({ where: { id } });
    
          if (!blog) {
            throw new Error("User not found");
          }
    
          blog.title = title;
          blog.description = description;
    
          const updatedBlog = await userRepository.save(blog);
    
          return updatedBlog;
        } catch (error) {
          throw error;
        }
      }
    
      static async delete(id: number): Promise<void> {
        try {
          const userRepository = AppDataSource.getRepository(Blog);
    
          const blog = await userRepository.findOne({ where: { id } });
    
          if (!blog) {
            throw new Error("User not found");
          }
    
          await userRepository.remove(blog);
        } catch (error) {
          throw error;
        }
      }
}