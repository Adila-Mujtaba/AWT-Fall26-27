import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStudentsTable1794700000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "students" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" varchar NOT NULL,
        "roll_number" varchar NOT NULL,
        "email" varchar NOT NULL,
        "age" integer NOT NULL,
        "grade" varchar NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_students_id" PRIMARY KEY ("id"),
        CONSTRAINT "UQ_students_roll_number" UNIQUE ("roll_number"),
        CONSTRAINT "UQ_students_email" UNIQUE ("email")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "students"`);
  }
}
