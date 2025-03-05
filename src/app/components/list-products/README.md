
# Componente de Listado de Productos

## Descripción General

El Componente de Listado de Productos es responsable de mostrar una tabla de productos con sus detalles y proporcionar acciones para gestionar estos productos. Este componente forma parte de una aplicación Angular basada en CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de productos.

## Características

- Mostrar una lista de productos con sus detalles (nombre, descripción, precio, stock)
- Agregar nuevos productos
- Editar productos existentes
- Eliminar productos
- Diseño de tabla responsivo
- Manejo de estado vacío cuando no hay productos disponibles

## Estructura del Componente

El componente consiste en un diseño de tarjeta responsivo que contiene:

1. Una sección de encabezado con el título "Listado de Productos"
2. Un botón "Agregar Producto"
3. Una tabla responsiva con columnas para:
   - Número de índice
   - Nombre del producto
   - Descripción
   - Precio (con símbolo de moneda)
   - Cantidad en stock
   - Botones de acción (Editar y Eliminar)
4. Mensaje de estado vacío cuando no hay productos disponibles

## Uso

Este componente normalmente se incluye en el enrutamiento principal de la aplicación. Interactúa con un servicio de productos para obtener la lista de productos y realizar operaciones CRUD.

### Estructura HTML

```html
<div class="container mt-5">
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="card">
        <div class="card-body">
          <h2 class="text-center">Listado de Productos</h2>

          <button class="btn btn-primary mb-3" (click)="addProduct()">
            <i class="bi bi-plus-circle"></i> Agregar Producto
          </button>

          <div class="table-responsive">
            <table class="table table-striped">
              <!-- Estructura de la tabla con encabezados y filas -->
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Métodos del Componente

La plantilla hace referencia a los siguientes métodos que deben implementarse en la clase del componente:

- `addProduct()`: Navega a un formulario para agregar un nuevo producto
- `editProduct(id: number)`: Navega a un formulario para editar el producto con el ID especificado
- `deleteProduct(id: number)`: Desencadena la eliminación del producto con el ID especificado

### Modelo de Datos

Este componente trabaja con la interfaz `Product` (que se encuentra en `src/app/interfaces/product.ts`), la cual incluye:

```typescript
export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
```

## Estilos

El componente utiliza Bootstrap 5 para el estilo con las siguientes clases:
- `container`, `row`, `col-*` para la disposición
- `card`, `card-body` para la estructura de la tarjeta
- `table`, `table-striped`, `table-responsive` para el estilo de la tabla
- `btn`, `btn-primary`, `btn-info`, `btn-danger` para el estilo de los botones
- Bootstrap Icons (`bi-*`) para los iconos

## Dependencias

- Bootstrap 5 (para estilo)
- Bootstrap Icons (para iconos)
- Bibliotecas básicas de Angular
