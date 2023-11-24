import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Role, RoleRepositoty } from "@role/domain";
import { RoleModel } from "../model";
import { Repository } from "typeorm";
import { RoleToDomain } from "../adapter/roleToDomain.mapper";

@Injectable()
export class RoleTypeOrmRepositoty implements RoleRepositoty {

    constructor(@InjectRepository(RoleModel)
    private typeOrmRepo: Repository<RoleModel>){}
    
    create(entity: Role): Promise<Role> {
        throw new Error("Method not implemented.");
    }
    find = async(query?: any): Promise<Role[]> => {
        const persistRole = await this.typeOrmRepo.find();

        const domainRoles = persistRole.map((roleObj) => {
            return RoleToDomain(roleObj);
        })

        return domainRoles;
    }
    findById(id: string, query?: object): Promise<Role> {
        throw new Error("Method not implemented.");
    }
    findOne(query: any): Promise<Role> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(id: string, dataToUpdate: Partial<Role>): Promise<Role> {
        throw new Error("Method not implemented.");
    }
    
}