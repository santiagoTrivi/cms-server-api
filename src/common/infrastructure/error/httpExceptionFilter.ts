import { BaseError } from '@common/domain';
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class HttpExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

    if (exception instanceof HttpException) {
      const responseBody = {
        statusCode,
        message: exception.message,
        error: exception.getResponse(),
      };
    }

    if (exception instanceof BaseError) {
      statusCode = exception.statusCode;
      const responseBody = {
        statusCode,
        message: exception.message,
        error: exception.error,
      };

      httpAdapter.reply(ctx.getResponse(), responseBody, statusCode);
    }
  }
}
