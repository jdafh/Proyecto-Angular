import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ropa-hombre',
  imports: [CommonModule],
  templateUrl: './ropa-hombre.html',
  styleUrl: './ropa-hombre.css',
})
export class RopaHombre {
  constructor(private router: Router) {}

  RopaHombre = [
    { id: 1,  name: 'Camisa negra',            color: '#1a1a1a', tallas: 'XL, L , M , S', precio: '20.000' },
    { id: 2,  name: 'Camisa oversize negra',    color: '#2a2a2a', tallas: 'XL, L , M , S', precio: '20.000' },
    { id: 3,  name: 'Camisa blanca',            color: '#e8e8e8', tallas: 'XL, L , M , S', precio: '20.000' },
    { id: 4,  name: 'Camisa oversize amarilla', color: '#e6a817', tallas: 'XL, L , M , S', precio: '20.000' },
    { id: 5,  name: 'Camisa verde',             color: '#2d7a3a', tallas: 'XL, L , M , S', precio: '20.000' },
    { id: 6,  name: 'Camisa oversize cafe',     color: '#6b4c3b', tallas: 'XL, L , M , S', precio: '20.000' },
    { id: 7,  name: 'Camisa azul',              color: '#2255c4', tallas: 'XL, L , M , S', precio: '20.000' },
    { id: 8,  name: 'Camisa oversize gris',     color: '#7a7a7a', tallas: 'XL, L , M , S', precio: '20.000' },
  ];

  verProducto(id: number) {
    this.router.navigate(['/producto', id]);
  }
}
