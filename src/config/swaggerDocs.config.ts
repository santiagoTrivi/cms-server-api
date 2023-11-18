import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerDocs = new DocumentBuilder()
  .setTitle('API Documentation for social-media-net')
  .setDescription('To make revervations')
  .setVersion('1.0')
  .addTag('auth')
  .addBearerAuth()
  .build();
