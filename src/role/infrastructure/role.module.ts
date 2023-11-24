import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModel } from './model';
import { RoleTypeOrmRepositoty, RolerepositoryProvider } from './repository';
import { GetRole } from '@role/application/getRole.useCase';

@Module({
    imports:[
        TypeOrmModule.forFeature([RoleModel])
    ],
    exports:[GetRole],
    providers:[RolerepositoryProvider, RoleTypeOrmRepositoty, GetRole]
})
export class RoleModule {}
