import { Injectable } from '@angular/core';

export interface Camisa {
  id: number;
  name: string;
  price: number;
  sizes: string[];
  material: string;
  type: string;
  gender: 'Hombre';
  color: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CamisaService {

  private camisas: Camisa[] = [
    {
      id: 1,
      name: 'Camisa azul manga larga',
      price: 20000,
      sizes: ['XL', 'L', 'M', 'S'],
      material: 'Algodón 100%',
      type: 'Manga larga',
      gender: 'Hombre',
      color: 'Azul',
      description: 'Camisa de manga larga en algodón suave, ideal para ocasiones formales e informales.',
      image: 'assets/camisa-azul-manga-larga.png'
    },
    {
      id: 2,
      name: 'Camisa manga corta',
      price: 20000,
      sizes: ['XL', 'L', 'M', 'S'],
      material: 'Algodón 95% - Elastano 5%',
      type: 'Manga corta',
      gender: 'Hombre',
      color: 'Blanco',
      description: 'Camisa manga corta ligera y cómoda, perfecta para el día a día.',
      image: 'assets/camisa-manga-corta.png'
    },
    {
      id: 3,
      name: 'Camisa azul',
      price: 20000,
      sizes: ['XL', 'L', 'M', 'S'],
      material: 'Algodón 100%',
      type: 'Clásica',
      gender: 'Hombre',
      color: 'Azul',
      description: 'Camisa clásica azul de corte regular, versátil y elegante.',
      image: 'assets/camisa-azul.png'
    },
    {
      id: 4,
      name: 'Camisa negra',
      price: 20000,
      sizes: ['XL', 'L', 'M', 'S'],
      material: 'Algodón 100%',
      type: 'Clásica',
      gender: 'Hombre',
      color: 'Negro',
      description: 'Camisa negra esencial, combina con todo y da un look sofisticado.',
      image: 'assets/camisa-negra.png'
    },
    {
      id: 5,
      name: 'Camisa polo',
      price: 20000,
      sizes: ['XL', 'L', 'M', 'S'],
      material: 'Piqué de algodón 100%',
      type: 'Polo',
      gender: 'Hombre',
      color: 'Variado',
      description: 'Polo clásico en piqué de algodón, cómodo y estilizado para cualquier ocasión.',
      image: 'assets/camisa-polo.png'
    },
    {
      id: 6,
      name: 'Camisa cuello tortuga',
      price: 20000,
      sizes: ['XL', 'L', 'M', 'S'],
      material: 'Algodón 80% - Poliéster 20%',
      type: 'Cuello tortuga',
      gender: 'Hombre',
      color: 'Variado',
      description: 'Camisa de cuello tortuga, abrigada y moderna, perfecta para clima frío.',
      image: 'assets/camisa-cuello-tortuga.png'
    },
    {
      id: 7,
      name: 'Camisa playera estampada',
      price: 20000,
      sizes: ['XL', 'L', 'M', 'S'],
      material: 'Algodón 100%',
      type: 'Estampada',
      gender: 'Hombre',
      color: 'Multicolor',
      description: 'Playera con estampado llamativo, ideal para looks casuales y juveniles.',
      image: 'assets/camisa-playera-estampada.png'
    },
    {
      id: 8,
      name: 'Camisa azul estampado',
      price: 20000,
      sizes: ['XL', 'L', 'M', 'S'],
      material: 'Algodón 90% - Elastano 10%',
      type: 'Estampada',
      gender: 'Hombre',
      color: 'Azul estampado',
      description: 'Camisa azul con estampado exclusivo, mezcla estilo y comodidad.',
      image: 'assets/camisa-azul-estampada.png'
    }
  ];

  getCamisas(): Camisa[] {
    return this.camisas;
  }

  getCamisaById(id: number): Camisa | undefined {
    return this.camisas.find(c => c.id === id);
  }
}
