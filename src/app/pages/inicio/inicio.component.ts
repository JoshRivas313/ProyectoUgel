import { Component } from '@angular/core';
import{ CommonModule } from '@angular/common';
import { ButonComponent } from './componentes/buton/buton.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    ButonComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
