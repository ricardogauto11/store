import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TODOS') private todos: any[],
    private configService: ConfigService,
  ) {}

  getHello(): string {
    const apiKey = this.configService.get<string>('API_KEY');
    const dbName = this.configService.get<string>('DATABASE_NAME');

    return `Hello World! ${apiKey}, ${dbName}`;
  }
}
