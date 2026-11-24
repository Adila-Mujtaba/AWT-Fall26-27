import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "students" })
export class Student {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  rollNumber!: string;

  @Column({ unique: true })
  email!: string;

  @Column("int")
  age!: number;

  @Column()
  grade!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
