import { Injectable } from '@nestjs/common';
import type { ApiResponse } from './interfaces/response.interface';

@Injectable()
export class AppService {
  getHello(): ApiResponse<T> {
    return 'Hello NestJS';
  }
}
