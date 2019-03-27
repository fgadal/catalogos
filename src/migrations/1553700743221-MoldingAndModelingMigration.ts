import { MigrationInterface, QueryRunner } from 'typeorm';

export class MoldingAndModelingMigration1553700743221 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE figurine ADD isModeling boolean NOT NULL DEFAULT (0)');
    await queryRunner.query('ALTER TABLE figurine ADD isMolding boolean NOT NULL DEFAULT (0)');
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropColumn('figurine', 'isModeling');
    await queryRunner.dropColumn('figurine', 'isMolding');
  }
}
