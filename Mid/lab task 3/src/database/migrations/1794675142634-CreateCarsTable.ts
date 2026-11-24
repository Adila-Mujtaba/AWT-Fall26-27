import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCarsTable1794700000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "cars" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "brand" varchar NOT NULL,
        "model" varchar NOT NULL,
        "year" integer NOT NULL,
        "price" double precision NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_cars_id" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cars"`);
  }
}