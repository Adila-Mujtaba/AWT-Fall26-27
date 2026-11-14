import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column({default: false})
  isDone!: boolean;

  @CreateDateColumn()
  createdAt!: Date;
}