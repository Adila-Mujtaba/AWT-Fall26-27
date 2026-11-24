import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  brand!: string;

  @Column()
  model!: string;

  @Column("int")
  year!: number;

  @Column("float")
  price!: number;

  @CreateDateColumn()
  createdAt!: Date;
}