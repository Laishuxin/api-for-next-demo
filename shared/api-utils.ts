import { HttpStatus } from '@nestjs/common';

export function createApiResponse<D = any>(
  code: HttpStatus = HttpStatus.OK,
  message = 'success',
  data?: D,
) {
  return {
    code,
    message,
    data: data ? data : null,
  };
}

export function createApiErrorResponse(
  code: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
  message = 'unknown error',
) {
  return createApiResponse<null>(code, message);
}
