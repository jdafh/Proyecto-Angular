import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Lo que ves es angular 👻👻👻 ');
}
