import { MigrationInterface, QueryRunner } from "typeorm";

export class PostRefactoring1709820079878 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "item" ADD COLUMN "description" varchar(60)`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "item" DROP COLUMN "description"`,
        )
    }

}
