import { HttpStatus } from '@nestjs/common';

// export const enum ApiResponseCode {
//   SERVER_ERROR = 50000,
// }
export interface ApiResponse<D> {
  code: HttpStatus;
  message: string;
  data: null | D;
}
