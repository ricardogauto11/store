import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { OrdersController } from './controllers/orders.controller';
import { CustomersController } from './controllers/customers.controller';

@Module({
  imports: [],
  controllers: [UsersController, OrdersController, CustomersController],
  providers: [],
})
export class UsersModule {}
