import { Component } from '@angular/core';
import { SubTituloComponent } from '../../componentes/sub-titulo/sub-titulo.component';
import { CuadroGrupoComponent } from '../../componentes/cuadro-grupo/cuadro-grupo.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [
    SubTituloComponent,
    CuadroGrupoComponent
  ],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {

}
