import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsSetting } from '@config/index';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerDocs } from '@config/swaggerDocs.config';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const documentation = SwaggerModule.createDocument(app, swaggerDocs);
  SwaggerModule.setup('/swagger', app, documentation);


  app.enableCors(corsSetting)

  if (process.env.NODE_DEV === 'development') {
    app.use(morgan('dev'));
  }
  
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3030);
}
bootstrap();
