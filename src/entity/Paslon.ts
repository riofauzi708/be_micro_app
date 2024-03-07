import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"
import { Vote } from "./Vote"

@Entity()
export class Paslon {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    paslonName: string
    
    @Column()
    number: number
    
    @Column()
    vision: string

    @ManyToOne(() => User, (user) => user.paslon)
    user: User

    @ManyToOne(() => Vote, (vote) => vote.paslon)
    vote: Vote
}
