import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserRepository } from '@user/domain';
import { Repository } from 'typeorm';
import { UserModel } from '../models';
import { UserMapperTypeOrm } from '../adapter/user.mapper';

@Injectable()
export class UserTypeOrmReposioty implements UserRepository {
  constructor(
    @InjectRepository(UserModel)
    private typeOrmRepo: Repository<UserModel>,
  ) {}

  create = async (entity: User): Promise<User> => {
    const created = await this.typeOrmRepo.save(entity);
    return UserMapperTypeOrm.toDomain(created);
  };
  findAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
  findById = async (id: any): Promise<User> => {
    const user = await this.typeOrmRepo.findOne({where: id});

    if(!user){
      return undefined
    }
    return UserMapperTypeOrm.toDomain(user);
  }
  findby = async (element: any): Promise<User | undefined> => {
    const user = await this.typeOrmRepo.findOne({where: element})

    if(!user){
      return undefined
    }
    return UserMapperTypeOrm.toDomain(user)
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(dataToUpdate: Partial<User>): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
