import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

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
  ): object {
    return {
      message: `Products Filter: limit ${limit}, offset ${offset}, brand ${brand}`,
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id') id: number): string {
    return `Product ${id}`;
  }

  @Post()
  create(@Body() payload: object) {
    return { message: 'Acción de crear', payload };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: object) {
    return {
      message: `Acción de actualizar ${id}`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `Acción de eliminar ${id}`,
    };
  }
}
