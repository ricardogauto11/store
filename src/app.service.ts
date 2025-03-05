import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TODOS') private todos: any[],
    @Inject(config.KEY) private configType: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    const apiKey = this.configType.apiKey;
    const dbName = this.configType.database.name;

    return `Hello World! ${apiKey}, ${dbName}`;
  }
}
