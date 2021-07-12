import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDatabase1626025917420 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createDatabase("cardb", true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropDatabase("cardb", true);
    }

}
