import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { InicioComponent } from "./pages/inicio/inicio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    InicioComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {


}
