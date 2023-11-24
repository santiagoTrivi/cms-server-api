import { InjectRepository } from '@nestjs/typeorm';
import { Profile, ProfileRepository } from '@profile/domain';
import { Repository } from 'typeorm';
import { ProfileModel } from '../model';
import { ProfileMapperTypeOrm } from '../adapter/profile.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileTypOrmRepository {
  constructor(
    @InjectRepository(ProfileModel)
    private typeOrmRepo: Repository<ProfileModel>,
  ) {}

  create = async (entity: Profile): Promise<Profile> => {
    const created = await this.typeOrmRepo.save(entity);
    return ProfileMapperTypeOrm.ToDomain(created);
  };
  findAll() {
    return this.typeOrmRepo.find({ relations: ['user'] });
  }
  findById(id: any): Promise<Profile> {
    throw new Error('Method not implemented.');
  }
  findby(element: any): Promise<Profile> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(dataToUpdate: Partial<Profile>): Promise<Profile> {
    throw new Error('Method not implemented.');
  }
}
