
# Backend - Full Stack Application

This project is built using the [NestJS](https://github.com/nestjs/nest) framework and is the backend part of the full-stack application.

## Project setup

```bash
$ npm install
```

## build and run the project

```bash
# Optional Step: for initaial seed data
$ npm run seed

# build
$ npm run build

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 📁 Structure

- `src/app.module.ts`: Root module of the application.
- `src/products/`: Product module with controller, service, and entity.
- `src/categories/`: Category module with controller, service, and entity.

## 🔧 Prerequisites

- Node.js (v18+)
- MySQL or any compatible database
- Ensure you have the `.env` file configured with correct database credentials.

### `.env` Example:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=MyStore
```

Make sure to set the correct database credentials in your `.env` file.