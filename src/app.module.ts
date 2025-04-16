// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';

// Shared ORM imports
import { AppDataSource } from 'shared-orm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...AppDataSource.options,
        autoLoadEntities: true,
      }),
    }),
    ProductsModule,
    CategoriesModule,
  ],
})
export class AppModule {}
