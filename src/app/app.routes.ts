import { Routes } from '@angular/router';

export const routes: Routes = [];
import { Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ListProductsComponent },
  { path: 'add-product', component: AddEditProductComponent },
  { path: 'edit-product/:id', component: AddEditProductComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];
