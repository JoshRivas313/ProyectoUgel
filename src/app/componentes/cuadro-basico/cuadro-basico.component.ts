import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuadro-basico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuadro-basico.component.html',
  styleUrl: './cuadro-basico.component.scss'
})
export class CuadroBasicoComponent {

  tarjetas = [
    {
      titulo: 'Trámites en Línea',
      descripcion: 'Gestiona tus documentos de manera eficiente y segura',
      icono: '📄'
    },
    {
      titulo: 'Calendario Académico',
      descripcion: 'Mantente al día con las fechas importantes del año escolar',
      icono: '📅'
    },
    {
      titulo: 'Portal Docente',
      descripcion: 'Accede a recursos pedagógicos y herramientas de enseñanza',
      icono: '🎓'
    },
    {
      titulo: 'Comunicados Oficiales',
      descripcion: 'Infórmate sobre las últimas noticias y anuncios importantes',
      icono: '🔔'
    }
  ];

}
