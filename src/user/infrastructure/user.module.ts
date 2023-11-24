import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './models';
import { AuthModule } from '@auth/infrastructure/auth.module';
import { UserTypeOrmReposioty, repositoryProvider } from './repository';
//import { CreateUser } from '@user/application';
import { PasswordCipherProvider } from '@auth/infrastructure/services';
import { ProfileModule } from '@profile/infrastructure/profile.module';
import {
  ProfileTypOrmRepository,
  ProfilerepositoryConfig,
} from '@profile/infrastructure/repository';
import { ProfileModel } from '@profile/infrastructure/model';
import { CreateUser } from '@user/application';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserModel, ProfileModel]),
    AuthModule,
    ProfileModule,
  ],
  exports: [UserTypeOrmReposioty, CreateUser],
  providers: [
    UserTypeOrmReposioty,
    ProfileTypOrmRepository,
    repositoryProvider,
    PasswordCipherProvider,
    CreateUser,
  ],
})
export class UserModule {}
