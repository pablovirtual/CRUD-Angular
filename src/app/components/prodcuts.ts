// src/app/components/products/products.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products.component';

@NgModule({
  declarations: [ListProductsComponent],
  imports: [
    CommonModule
  ],
  exports: [ListProductsComponent] // Exportar para usar en otros módulos
})
export class ProductsModule { }