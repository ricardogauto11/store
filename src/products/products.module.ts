import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';

@Module({
  imports: [],
  controllers: [ProductsController, BrandsController, CategoriesController],
  providers: [ProductsService],
})
export class ProductsModule {}
