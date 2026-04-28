import { Component } from '@angular/core';

@Component({
  selector: 'app-ropa-hombre',
  imports: [],
  templateUrl: './ropa-hombre.html',
  styleUrl: './ropa-hombre.css',
})
export class RopaHombre {
  hombre =[
    {id: 1, name: 'Camisas'},
    {id: 2, name: 'Camisas Oversize'}, 
    {id: 3, name: 'Buzos'},
    {id: 4, name: 'Pantalones'},
    {id: 5, name: 'Pantalones Oversize'},
    {id: 6, name: 'Zapatos'},
  ];
}
