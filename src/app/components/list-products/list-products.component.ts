import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ListProductsComponent implements OnInit {
  listProducts: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listProducts = [
      { name: 'Coca cola', description: 'Dieta', price: 10, stock: 5 },
      { name: 'Corona', description: 'Light', price: 20, stock: 10 },
    ];
  }
}