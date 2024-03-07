import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Partai {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    partaiName: string
    
    @Column()
    leader: string

    @Column()
    vision: string

    @Column()
    address: string

    @ManyToOne(() => User, (user) => user.partai)
    user: User
}
