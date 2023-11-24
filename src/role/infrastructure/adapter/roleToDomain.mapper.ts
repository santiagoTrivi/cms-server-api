import { Role } from "@role/domain";
import { RoleModel } from "../model";


export const  RoleToDomain =(role: RoleModel) => {
    return new Role({
        ...role
    })
}