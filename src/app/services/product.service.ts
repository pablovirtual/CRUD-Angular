
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Coca cola', description: 'Dieta', price: 10, stock: 5 },
    { id: 2, name: 'Corona', description: 'Light', price: 20, stock: 10 },
  ];
  
  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  
  constructor() { }
  
  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }
  
  addProduct(product: Product): void {
    // Generar un ID único para el nuevo producto
    const id = this.products.length > 0 
      ? Math.max(...this.products.map(p => p.id || 0)) + 1 
      : 1;
    
    const newProduct = { ...product, id };
    this.products.push(newProduct);
    this.productsSubject.next([...this.products]);
  }
  
  updateProduct(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = { ...product };
      this.productsSubject.next([...this.products]);
    }
  }
  
  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
    this.productsSubject.next([...this.products]);
  }
  
  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
