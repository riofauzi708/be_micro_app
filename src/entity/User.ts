import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Blog } from "./Blog"
import { Vote } from "./Vote"
import { Paslon } from "./Paslon"
import { Partai } from "./Partai"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    fullname: string

    @Column()
    address: string

    @Column()
    gender: string

    @OneToMany(() => Blog, (blog) => blog.user)
    blog: Blog

    @OneToMany(() => Vote, (vote) => vote.user)
    vote: Vote

    @OneToMany(() => Paslon, (paslon) => paslon.user)
    paslon: Paslon

    @OneToMany(() => Partai, (partai) => partai.user)
    partai: Partai
}