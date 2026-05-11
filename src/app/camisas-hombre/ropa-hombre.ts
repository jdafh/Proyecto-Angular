import { Component, OnInit } from '@angular/core';
import { CamisaService, Camisa } from '../services/camisas-hombre';

@Component({
  selector: 'app-camisas-hombre',
  templateUrl: './ropa-hombre.html',
  styleUrl: './ropa-hombre.css'
})
export class CamisasHombre implements OnInit {

  camisas: Camisa[] = [];

  constructor(private camisaService: CamisaService) {}

  ngOnInit() {
    this.camisas = this.camisaService.getCamisas();
  }
}