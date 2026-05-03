import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ropa-mujer',
  imports: [CommonModule],
  templateUrl: './ropa-mujer.html',
  styleUrl: './ropa-mujer.css',
})
export class RopaMujer {
  constructor(private router: Router) {}

  ropaMujer = [
    { id: 9,  name: 'Vestido rosa',     color: '#d4867a', tallas: 'XL, L , M , S', precio: '20.000' },
    { id: 10, name: 'Vestido negro',    color: '#1a1a1a', tallas: 'XL, L , M , S', precio: '20.000' },
    { id: 11, name: 'Blusa crema',      color: '#e8d8c0', tallas: 'XL, L , M , S', precio: '20.000' },
    { id: 12, name: 'Blusa terracota',  color: '#c1603b', tallas: 'XL, L , M , S', precio: '20.000' },
    { id: 13, name: 'Vestido menta',    color: '#7bbfa8', tallas: 'XL, L , M , S', precio: '20.000' },
    { id: 14, name: 'Blusa lavanda',    color: '#b8a4cc', tallas: 'XL, L , M , S', precio: '20.000' },
    { id: 15, name: 'Vestido camel',    color: '#c9a87c', tallas: 'XL, L , M , S', precio: '20.000' },
    { id: 16, name: 'Blusa borgoña',    color: '#7d2938', tallas: 'XL, L , M , S', precio: '20.000' },
  ];

  verProducto(id: number) {
    this.router.navigate(['/producto', id]);
  }
}