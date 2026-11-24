import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatecarTable1794601735368 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "car" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" varchar NOT NULL,
                "is_done" boolean NOT NULL DEFAULT false,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_car_id" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "car"`);
    }

}
