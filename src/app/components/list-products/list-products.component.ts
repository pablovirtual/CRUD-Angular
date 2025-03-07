import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.listProducts = products;
    });
  }

  addProduct(): void {
    this.router.navigate(['/add-product']);
  }

  editProduct(id: number): void {
    this.router.navigate(['/edit-product', id]);
  }

  deleteProduct(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.productService.deleteProduct(id);
    }
  }
}