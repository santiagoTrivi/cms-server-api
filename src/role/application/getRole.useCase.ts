import { Inject, Injectable } from "@nestjs/common";
import { RoleRepositoty } from "@role/domain";


@Injectable()
export class GetRole {

    constructor(
        @Inject('RoleRepositoty') readonly roleRepository: RoleRepositoty
    ){}


    execute = async () => {
        try {
            const found = await this.roleRepository.find();

            const roles = found.map(({roleId, roleName}) => {
                return {roleId, roleName}
            })

            return roles;
        } catch (error) {
            throw error;
        }
    }

}