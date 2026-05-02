import { Component } from '@angular/core';

@Component({
  selector: 'app-ropa-mujer',
  imports: [],
  templateUrl: './ropa-mujer.html',
  styleUrl: './ropa-mujer.css',
})
export class RopaMujer {
  ropaMujer = [
  { id: 1, name: 'Camisas', description: 'Variedad de estilos', age: 1 },
  { id: 2, name: 'Camisas Oversize', description: 'Moda urbana', age: 2 },
  { id: 3, name: 'Buzos', description: 'Cómodos y cálidos', age: 1 },
  { id: 4, name: 'Pantalones', description: 'Diferentes cortes', age: 2 },
  { id: 5, name: 'Pantalones Oversize', description: 'Tendencia actual', age: 1 },
  { id: 6, name: 'Zapatos', description: 'Para toda ocasión', age: 3 }
];
}
