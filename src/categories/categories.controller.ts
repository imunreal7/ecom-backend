import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from 'shared-orm';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }
}
