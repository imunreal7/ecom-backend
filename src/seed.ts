import { AppDataSource } from 'shared-orm';
import { Category, Product } from 'shared-orm';

async function seed() {
  await AppDataSource.initialize();

  const category = new Category();
  category.categoryName = 'Books';
  category.description = 'Fiction and Non-Fiction';
  category.isActive = true;
  category.createdAt = new Date();
  category.updatedAt = new Date();
  await AppDataSource.manager.save(category);

  const product = new Product();
  product.productName = 'Harry Potter';
  product.description = 'Fantasy novel';
  product.price = 29.99;
  product.stockQuantity = 100;
  product.createdAt = new Date();
  product.updatedAt = new Date();
  product.category = category;
  await AppDataSource.manager.save(product);

  console.log('✅ Seed complete');
  await AppDataSource.destroy();
}

seed();
