import { Injectable } from '@nestjs/common';
import type { ApiResponse } from './interfaces/response.interface';

@Injectable()
export class AppService {
  getHello(): {
    service: string;
    version: string;
  } {
    return {
      service: 'purchase-api',
      version: '1.0.0',
    };
  }
}
