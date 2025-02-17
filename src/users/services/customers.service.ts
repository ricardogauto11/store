import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDTO, UpdateCustomerDTO } from '../DTOs/customers.dtos';

@Injectable()
export class CustomersService {
  private counterId = 0;
  private customers = [
    {
      id: 1,
      name: 'Juan',
      lastname: 'Laserna',
      phone: '1234567890',
      createdAt: new Date(),
    },
    {
      id: 2,
      name: 'John',
      lastname: 'Doe',
      phone: '1234567890',
      createdAt: new Date(),
    },
    {
      id: 3,
      name: 'Jane',
      lastname: 'Doe',
      phone: '1234567890',
      createdAt: new Date(),
    },
    {
      id: 4,
      name: 'Alice',
      lastname: 'Doe',
      phone: '1234567890',
      createdAt: new Date(),
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((customer) => customer.id === id);

    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }

    return customer;
  }

  create(payload: CreateCustomerDTO) {
    this.counterId++;

    const newCustomer = {
      id: this.counterId,
      ...payload,
      createdAt: new Date(),
    };

    this.customers.push(newCustomer);

    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDTO) {
    const customer = this.findOne(id);

    if (customer) {
      const index = this.customers.findIndex((customer) => customer.id === id);
      this.customers[index] = { ...customer, ...payload };

      return this.customers[index];
    }
  }
}
