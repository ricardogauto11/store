import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO } from 'src/users/DTOs/users.dtos';
import { Order } from '../entities/order.entity';
import { ProductsService } from 'src/products/services/products.service';

@Injectable()
export class UsersService {
  constructor(
    private productsService: ProductsService,
    @Inject('API_KEY') private apiKey: string,
  ) {}

  private counterId = 0;
  private users = [
    {
      id: 1,
      name: 'John',
      email: 'john@nestjs.com',
      password: 'password',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Doe',
      email: 'doe@nestjs.com',
      password: 'password',
      role: 'editor',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: 'Jane',
      email: 'jane@nestjs.com',
      password: 'password',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      name: 'Alice',
      email: 'alice@nestjs.com',
      password: 'password',
      role: 'editor',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    return user;
  }

  create(payload: CreateUserDTO) {
    this.counterId++;

    const newUser = {
      id: this.counterId,
      ...payload,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(newUser);

    return newUser;
  }

  update(id: number, payload: UpdateUserDTO) {
    const user = this.findOne(id);

    if (user) {
      const index = this.users.findIndex((user) => user.id === id);
      this.users[index] = {
        ...user,
        ...payload,
        updatedAt: new Date(),
      };

      return this.users[index];
    }
  }

  delete(id: number) {
    const index = this.users.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new NotFoundException(`User #${id} not found`);
    }

    this.users.splice(index, 1);

    return true;
  }

  // Orders

  getOrderByUser(id: number): Order {
    const user = this.findOne(id);

    return {
      id: this.counterId++,
      date: new Date(),
      user,
      products: this.productsService.findAll(),
    };
  }
}
