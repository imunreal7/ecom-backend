import { AppDataSource } from 'shared-orm';
import { Category, Product } from 'shared-orm';

async function seed() {
  await AppDataSource.initialize();
  const now = new Date();

  // Define your multiple categories data
  const categoryData = [
    { categoryName: 'Books', description: 'Fiction and Non-Fiction' },
    { categoryName: 'Electronics', description: 'Gadgets and Appliances' },
    { categoryName: 'Furniture', description: 'Home and Office Furniture' },
  ];

  // Create and save each category
  const categories: Category[] = [];
  for (const data of categoryData) {
    const category = new Category();
    category.categoryName = data.categoryName;
    category.description = data.description;
    category.isActive = true;
    category.createdAt = now;
    category.updatedAt = now;
    const savedCategory = await AppDataSource.manager.save(category);
    categories.push(savedCategory);
  }

  // Define multiple products data
  // Use the category index to assign each product to a category
  const productData = [
    {
      productName: 'Harry Potter',
      description: 'Fantasy novel',
      price: 29.99,
      stockQuantity: 100,
      categoryIndex: 0, // associated with Books
    },
    {
      productName: 'iPhone',
      description: 'Latest smartphone with great features',
      price: 999.99,
      stockQuantity: 50,
      categoryIndex: 1, // associated with Electronics
    },
    {
      productName: 'Office Chair',
      description: 'Ergonomic chair for office use',
      price: 199.99,
      stockQuantity: 25,
      categoryIndex: 2, // associated with Furniture
    },
    {
      productName: 'MacBook Pro',
      description: 'High-performance laptop',
      price: 2399.99,
      stockQuantity: 30,
      categoryIndex: 1, // associated with Electronics
    },
  ];

  // Create and save each product
  for (const data of productData) {
    const product = new Product();
    product.productName = data.productName;
    product.description = data.description;
    product.price = data.price;
    product.stockQuantity = data.stockQuantity;
    product.createdAt = now;
    product.updatedAt = now;
    // Associate the product with its category based on categoryIndex
    product.category = categories[data.categoryIndex];
    await AppDataSource.manager.save(product);
  }

  console.log('✅ Seed complete');
  await AppDataSource.destroy();
}

seed();
