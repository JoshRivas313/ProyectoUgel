import { Component } from '@angular/core';
import{ CommonModule } from '@angular/common';
import { ButonComponent } from '../../componentes/buton/buton.component';
import { SubTituloComponent } from '../../componentes/sub-titulo/sub-titulo.component';
import { CuadroBasicoComponent } from '../../componentes/cuadro-basico/cuadro-basico.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CuadroBasicoComponent,
    CommonModule,
    ButonComponent,
    SubTituloComponent

],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
