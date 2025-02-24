import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TODOS') private todos: any[],
  ) {}

  getHello(): string {
    return `Hello World!  ${this.apiKey}`;
  }
}
