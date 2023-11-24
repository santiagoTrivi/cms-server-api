import { Module } from '@nestjs/common';
import { ProfileTypOrmRepository } from './repository/profileTypeOrm.respository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModel } from './model';

@Module({
  imports: [],
  exports: [],
  providers: [],
})
export class ProfileModule {}
