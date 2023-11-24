import { ConfigService } from '@nestjs/config';
import { UserModel } from '../src/user/infrastructure/models/use.model';
import { RoleModel } from '../src/role/infrastructure/model';
import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

const configService = new ConfigService();


export default new DataSource(
    {
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: parseInt(configService.get<string>('DATABASE_PORT')),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        url: configService.get<string>('DATABASE_URL'),
        entities: [UserModel, RoleModel],
        migrations:['migration/**'],
        synchronize: true,
    }
);