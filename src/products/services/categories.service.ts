import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { CreateCategoryDTO, UpdateCategoryDTO } from '../DTOs/categories.dtos';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    { id: 1, name: 'Camisetas' },
    { id: 2, name: 'Pantalones' },
    { id: 3, name: 'Chaquetas' },
    { id: 4, name: 'Zapatos' },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((category) => category.id === id);

    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }

    return category;
  }

  create(payload: CreateCategoryDTO) {
    this.counterId++;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };

    this.categories.push(newCategory);

    return newCategory;
  }

  update(id: number, payload: UpdateCategoryDTO) {
    const category = this.findOne(id);

    if (!category) {
      return new NotFoundException(`Category #${id} not found`);
    }

    const index = this.categories.findIndex((item) => item.id === id);

    this.categories[index] = {
      ...category,
      ...payload,
    };

    return this.categories[index];
  }

  delete(id: number) {
    const index = this.categories.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException(`Category #${id} not found`);
    }

    this.categories.splice(index, 1);

    return true;
  }
}
