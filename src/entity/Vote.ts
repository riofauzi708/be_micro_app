import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { Paslon } from "./Paslon";

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: string;

  @Column()
  postedAt: string;

  @ManyToOne(() => User, (user) => user.vote)
  user: User;

  @ManyToOne(() => Paslon, (paslon) => paslon.vote)
  paslon: Paslon[];
}