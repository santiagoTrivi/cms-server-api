import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresCofigService } from '@database/postgresConfigService';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/infrastructure/user.module';
import { AuthModule } from './auth/infrastructure/auth.module';
import { httpExceptionFilterConfig } from '@common/infrastructure';
import { UserController } from './user/infrastructure/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: PostgresCofigService,
      inject: [PostgresCofigService],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController, UserController],
  providers: [
    httpExceptionFilterConfig,
    AppService],
})
export class AppModule {}
