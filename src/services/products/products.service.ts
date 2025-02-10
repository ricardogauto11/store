import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 4;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Product 1 description',
      image: '= URL_ADDRESSicsum.photos/200/300',
      stock: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 100,
      description: 'Product 2 description',
      image: 'URL_ADDRESSicsum.photos/200/300',
      stock: 10,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      description: 'Product 3 description',
      image: 'URL_ADDRESSicsum.photos/200/300',
      stock: 30,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
      description: 'Product 4 description',
      image: 'URL_ADDRESSicsum.photos/200/300',
      stock: 40,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    return product;
  }

  create(payload: any) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (!product) {
      return null;
    }
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...product,
      ...payload,
    };

    return this.products[index];
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    this.products.splice(index, 1);
    return true;
  }
}
