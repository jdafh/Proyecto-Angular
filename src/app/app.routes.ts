import { Routes } from '@angular/router';
import { Home } from './home/home';
import { RopaHombre } from './ropa-hombre/ropa-hombre';
import { RopaMujer } from './ropa-mujer/ropa-mujer';
import { Navbar } from './navbar/navbar';
import { ProductoDetalle } from './producto-detalle/producto-detalle';
import { Catalogo } from './catalogo/catalogo';
import { IniciarSesion} from './iniciar-sesion/iniciar-sesion';
import { CrearCuenta } from './crear-cuenta/crear-cuenta';
import { Carrito } from './carrito/carrito'; 

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'ropa-hombre', component: RopaHombre },
  { path: 'ropa-mujer', component: RopaMujer },
  { path: 'catalogo', component: Catalogo },
  { path: 'home', component: Home },
  { path: 'navbar', component: Navbar },
  { path: 'producto/:id', component: ProductoDetalle },
  { path: 'iniciar-sesion', component: IniciarSesion },
  { path: 'crear-cuenta', component: CrearCuenta },
  { path: 'carrito', component: Carrito },
  { path: '**', redirectTo: '' }
];