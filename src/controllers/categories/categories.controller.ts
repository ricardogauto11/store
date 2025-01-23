import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: number,
    @Param('productId') productId: string,
  ): string {
    return `Category ${categoryId}, Product ${productId}`;
  }
}
