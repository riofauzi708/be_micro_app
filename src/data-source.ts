import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Blog } from "./entity/Blog"
import { Vote } from "./entity/Vote"
import { Paslon } from "./entity/Paslon"
import { Partai } from "./entity/Partai"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "micro_app",
    synchronize: true,
    logging: false,
    entities: [User, Blog, Paslon, Partai, Vote],
    migrations: [],
    subscribers: [],
})
