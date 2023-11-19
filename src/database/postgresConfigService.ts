import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { UserModel } from '@user/infrastructure/models';



@Injectable()
export class PostgresCofigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'postgres',
      host: this.configService.get<string>('DATABASE_HOST'),
      port: parseInt(this.configService.get<string>('DATABASE_PORT')),
      username: this.configService.get<string>('DATABASE_USER'),
      password: this.configService.get<string>('DATABASE_PASSWORD'),
      database: this.configService.get<string>('DATABASE_NAME'),
      url: this.configService.get<string>('DATABASE_URL'),
      entities:[UserModel],
      synchronize: true
    };
  }
}
