import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from 'shared-orm';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }
}
