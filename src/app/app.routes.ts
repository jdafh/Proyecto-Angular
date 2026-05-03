import { Routes } from '@angular/router';
import { Home } from './home/home';
import { RopaHombre } from './ropa-hombre/ropa-hombre';
import { RopaMujer } from './ropa-mujer/ropa-mujer';
import { Navbar } from './navbar/navbar';
import { ProductoDetalle } from './producto-detalle/producto-detalle';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'ropa-hombre', component: RopaHombre },
  { path: 'ropa-mujer', component: RopaMujer },
  { path: 'home', component: Home },
  { path: 'navbar', component: Navbar },
  { path: 'producto/:id', component: ProductoDetalle },
  { path: '**', redirectTo: '' }
];