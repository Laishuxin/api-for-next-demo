import { Logger } from '@nestjs/common';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { createApiErrorResponse } from 'shared/api-utils';

@Catch()
export class OtherExceptionFilter implements ExceptionFilter {
  private logger: Logger = new Logger('[INTERNAL_SERVER_ERROR LOGGER]: ');
  // not really http exception, but is an unknown exception
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    this.logger.error(exception.message, exception.stack);

    response
      .status(200)
      .json(createApiErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR));
  }
}
