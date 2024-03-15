import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { User } from "./User"
import { Vote } from "./Vote"

@Entity()
export class Paslon {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    paslonName: string
    
    @Column()
    number: string
    
    @Column()
    vision: string

    @ManyToOne(() => User, (user) => user.paslon)
    user: User

    @OneToMany(() => Vote, (vote) => vote.paslon)
    vote: Vote
}
