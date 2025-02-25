import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-titulo',
  standalone: true,
  imports: [],
  templateUrl: './sub-titulo.component.html',
  styleUrl: './sub-titulo.component.scss'
})

export class SubTituloComponent {

  @Input() texto: string = 'Subtitulo';
  @Input() subTexto: string = '';
}
