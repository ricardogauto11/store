import { Global, Module } from '@nestjs/common';

const API_KEY = '12345678';
const API_KEY_PROD = '87654321';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'production' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
