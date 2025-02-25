import { Component } from '@angular/core';
import{ CommonModule } from '@angular/common';
import { ButonComponent } from '../../componentes/buton/buton.component';
import { SubTituloComponent } from '../../componentes/sub-titulo/sub-titulo.component';
import { CuadroBasicoComponent } from '../../componentes/cuadro-basico/cuadro-basico.component';
import { CuadroNoticiasComponent } from '../../componentes/cuadro-noticias/cuadro-noticias.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CuadroBasicoComponent,
    CommonModule,
    ButonComponent,
    SubTituloComponent,
    CuadroNoticiasComponent

],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
