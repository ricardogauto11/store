import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(): string {
    return `All products`;
  }

  @Get('filter')
  getProductsFilter(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ): string {
    return `Products Filter: limit ${limit}, offset ${offset}, brand ${brand}`;
  }

  @Get(':id')
  getProduct(@Param('id') id: number): string {
    return `Product ${id}`;
  }
}
