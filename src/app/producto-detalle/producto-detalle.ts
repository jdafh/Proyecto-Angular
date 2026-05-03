import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
 
interface Producto {
  id: number;
  name: string;
  tallas: string[];
  precio: number;
  color: string;
  categoria: string;
}
 
const CATALOGO: Producto[] = [
  // Hombre
  { id: 1,  name: 'Camisa negra',          tallas: ['XL','L','M','S'], precio: 20000, color: '#1a1a1a', categoria: 'hombre' },
  { id: 2,  name: 'Camisa oversize negra',  tallas: ['XL','L','M','S'], precio: 20000, color: '#2a2a2a', categoria: 'hombre' },
  { id: 3,  name: 'Camisa blanca',          tallas: ['XL','L','M','S'], precio: 20000, color: '#f0f0f0', categoria: 'hombre' },
  { id: 4,  name: 'Camisa oversize amarilla', tallas: ['XL','L','M','S'], precio: 20000, color: '#e6a817', categoria: 'hombre' },
  { id: 5,  name: 'Camisa verde',           tallas: ['XL','L','M','S'], precio: 20000, color: '#2d7a3a', categoria: 'hombre' },
  { id: 6,  name: 'Camisa oversize cafe',   tallas: ['XL','L','M','S'], precio: 20000, color: '#6b4c3b', categoria: 'hombre' },
  { id: 7,  name: 'Camisa azul',            tallas: ['XL','L','M','S'], precio: 20000, color: '#2255c4', categoria: 'hombre' },
  { id: 8,  name: 'Camisa oversize gris',   tallas: ['XL','L','M','S'], precio: 20000, color: '#8a8a8a', categoria: 'hombre' },
  // Mujer
  { id: 9,  name: 'Vestido rosa',           tallas: ['XL','L','M','S'], precio: 20000, color: '#d4867a', categoria: 'mujer' },
  { id: 10, name: 'Vestido negro',          tallas: ['XL','L','M','S'], precio: 20000, color: '#1a1a1a', categoria: 'mujer' },
  { id: 11, name: 'Blusa crema',            tallas: ['XL','L','M','S'], precio: 20000, color: '#f0e8dc', categoria: 'mujer' },
  { id: 12, name: 'Blusa terracota',        tallas: ['XL','L','M','S'], precio: 20000, color: '#c1603b', categoria: 'mujer' },
  { id: 13, name: 'Vestido menta',          tallas: ['XL','L','M','S'], precio: 20000, color: '#7bbfa8', categoria: 'mujer' },
  { id: 14, name: 'Blusa lavanda',          tallas: ['XL','L','M','S'], precio: 20000, color: '#b8a4cc', categoria: 'mujer' },
  { id: 15, name: 'Vestido camel',          tallas: ['XL','L','M','S'], precio: 20000, color: '#c9a87c', categoria: 'mujer' },
  { id: 16, name: 'Blusa borgoña',          tallas: ['XL','L','M','S'], precio: 20000, color: '#7d2938', categoria: 'mujer' },
];
 
@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle implements OnInit {
  producto: Producto | undefined;
  tallaSeleccionada: string = '';
  cantidad: number = 1;
  metodoPago: string = '';
 
  constructor(private route: ActivatedRoute, private router: Router) {}
 
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = CATALOGO.find(p => p.id === id);
    if (this.producto) {
      this.tallaSeleccionada = this.producto.tallas[2]; // M por defecto
    }
  }
 
  seleccionarTalla(talla: string) {
    this.tallaSeleccionada = talla;
  }
 
  seleccionarPago(metodo: string) {
    this.metodoPago = metodo;
  }
 
  aumentar() {
    this.cantidad++;
  }
 
  disminuir() {
    if (this.cantidad > 1) this.cantidad--;
  }
 
  volver() {
    const cat = this.producto?.categoria;
    this.router.navigate([cat === 'mujer' ? '/ropa-mujer' : '/ropa-hombre']);
  }
 
  finalizar() {
    if (!this.metodoPago) {
      alert('Por favor selecciona un método de pago.');
      return;
    }
    alert(`✅ Compra finalizada!\n${this.producto?.name}\nTalla: ${this.tallaSeleccionada} | Cantidad: ${this.cantidad}\nPago: ${this.metodoPago}`);
  }
 
  get precioFormateado(): string {
    return this.producto ? this.producto.precio.toLocaleString('es-CO') : '';
  }
 
  get totalFormateado(): string {
    return this.producto
      ? (this.producto.precio * this.cantidad).toLocaleString('es-CO')
      : '';
  }
}