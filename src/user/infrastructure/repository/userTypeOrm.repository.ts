import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserRepository } from '@user/domain';
import { Repository } from 'typeorm';
import { UserModel } from '../models';
import { toDomain, toPersistMapper } from '../adapter/user.mapper';

@Injectable()
export class UserTypeOrmReposioty implements UserRepository {
  constructor(
    @InjectRepository(UserModel)
    private typeOrmRepo: Repository<UserModel>,
  ) {}

  create = async (entity: User) => {
    const user = toPersistMapper(entity);
    await this.typeOrmRepo.save(user);
  };

  findById = async (id: any): Promise<User> => {
    const user = await this.typeOrmRepo.findOne({ where: id });

    if (!user) {
      return undefined;
    }
    return toDomain(user);
  };

  find = async (query?: object): Promise<User[]> => {
    throw new Error('Method not implemented.');
  };

  findOne = async (query: any): Promise<User | undefined> => {
    const found = await this.typeOrmRepo.findOne({ where: query });

    if (!found) return undefined;
    return toDomain(found);
  };

  delete = (id: string): Promise<void> => {
    throw new Error('Method not implemented.');
  };
  update = async (id: string, dataToUpdate: Partial<User>): Promise<User> => {
    throw new Error('Method not implemented.');
  };
}
