import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionsFilter } from './httpExceptionFilter';

export const httpExceptionFilterConfig = {
  provide: APP_FILTER,
  useClass: HttpExceptionsFilter,
};
