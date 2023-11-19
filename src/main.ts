import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsSetting } from '@config/index';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerDocs } from '@config/swaggerDocs.config';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { DtoError } from '@common/domain/error/DtoError';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const documentation = SwaggerModule.createDocument(app, swaggerDocs);
  SwaggerModule.setup('/swagger', app, documentation);


  app.enableCors(corsSetting)

  if (process.env.NODE_DEV === 'development') {
    app.use(morgan('dev'));
  }
  
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors: ValidationError[]) => {
      const messages = errors.map(error => `${error.property}: ${Object.values(error.constraints).join(', ')}`);
      return new DtoError(messages);
    }
  }));
  await app.listen(process.env.PORT || 3030);
}
bootstrap();
