
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-add-edit-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent implements OnInit {
  productForm: FormGroup;
  title = 'Agregar Producto';
  id: number | null = null;
  buttonText = 'Agregar';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0.01)]],
      stock: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        this.title = 'Editar Producto';
        this.buttonText = 'Actualizar';
        this.loadProduct();
      }
    });
  }

  loadProduct(): void {
    if (this.id) {
      const product = this.productService.getProductById(this.id);
      if (product) {
        this.productForm.patchValue({
          name: product.name,
          description: product.description,
          price: product.price,
          stock: product.stock
        });
      }
    }
  }

  saveProduct(): void {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
      
      if (this.id) {
        // Editar producto existente
        product.id = this.id;
        this.productService.updateProduct(product);
      } else {
        // Agregar nuevo producto
        this.productService.addProduct(product);
      }
      
      this.router.navigate(['/products']);
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
