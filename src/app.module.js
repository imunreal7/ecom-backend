"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
// src/app.module.ts
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
// **ONLY ONE** import per module
const products_module_1 = require("./products/products.module");
const categories_module_1 = require("./categories/categories.module");
// Shared ORM imports
const shared_orm_1 = require("shared-orm");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => ({
                    ...shared_orm_1.AppDataSource.options,
                    autoLoadEntities: true,
                }),
            }),
            products_module_1.ProductsModule,
            categories_module_1.CategoriesModule,
        ],
    })
], AppModule);
