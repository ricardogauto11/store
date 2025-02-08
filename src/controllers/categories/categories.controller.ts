import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getAll(): string {
    return `All categories`;
  }

  @Get(':categoryId/products/:productId')
  getById(
    @Param('categoryId') categoryId: number,
    @Param('productId') productId: string,
  ): string {
    return `Category ${categoryId}, Product ${productId}`;
  }
}
