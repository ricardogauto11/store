import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDTO, UpdateBrandDTO } from '../DTOs/brands.dtos';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Nike',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
    },
    {
      id: 2,
      name: 'Adidas',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png',
    },
    {
      id: 3,
      name: 'Puma',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_Logo.svg',
    },
    {
      id: 4,
      name: 'Reebok',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Reebok_2019_logo.svg',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((brand) => brand.id == id);

    if (!brand) {
      throw new NotFoundException(`Brand ${id} not found`);
    }

    return brand;
  }

  create(payload: CreateBrandDTO) {
    this.counterId++;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };

    this.brands.push(newBrand);

    return newBrand;
  }

  update(id: number, payload: UpdateBrandDTO) {
    const brand = this.findOne(id);

    if (!brand) {
      return new NotFoundException(`Brand #${id} not found`);
    }

    const index = this.brands.findIndex((item) => item.id === id);
    this.brands[index] = {
      ...brand,
      ...payload,
    };

    return this.brands[index];
  }

  delete(id: number) {
    const index = this.brands.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException(`Brand #${id} not found`);
    }

    this.brands.splice(index, 1);

    return true;
  }
}
