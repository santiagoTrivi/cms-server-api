import { systemRoles, Role } from "../src/role/domain"
import { RoleModel } from '../src/role/infrastructure/model';
import { MigrationInterface, QueryRunner } from "typeorm"

export class  $npmConfigName1700797061869 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const roleRepo = queryRunner.connection.getRepository(RoleModel)

        const roles: Role[] = systemRoles.map((roleName) => {
            return Role.create(roleName)
        })

        await roleRepo.insert(roles);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
