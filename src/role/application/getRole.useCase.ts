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

            const roles = found.map(({role_id, role_name}) => {
                return {role_id, role_name}
            })

            return roles;
        } catch (error) {
            throw error;
        }
    }

}