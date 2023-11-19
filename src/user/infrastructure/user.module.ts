import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './models';
import { AuthModule } from '@auth/infrastructure/auth.module';
import { UserTypeOrmReposioty, repositoryConfig } from './repository';
import { CreateUser } from '@user/application';
import { PasswordCipherConfig } from '@auth/infrastructure/services';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserModel]),
        AuthModule
    ],
    exports: [UserTypeOrmReposioty, CreateUser],
    providers: [
        UserTypeOrmReposioty,
        PasswordCipherConfig,
        CreateUser,
        repositoryConfig,
    ]
})
export class UserModule {}
