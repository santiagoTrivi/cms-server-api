import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const corsSetting: CorsOptions = {
  origin: ['*'],
  preflightContinue: false,
  methods: ['*', 'PATCH'],
  optionsSuccessStatus: 204,
  allowedHeaders: [
    'Access-Control-Allow-Origin',
    'Content-Type',
    'Accept',
    'Origin',
    'x-refresh-token',
    'Authorization',
  ],
  credentials: true,
}; 