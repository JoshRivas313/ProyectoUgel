import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caudro-centrado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caudro-centrado.component.html',
  styleUrl: './caudro-centrado.component.scss'
})

export class CaudroCentradoComponent {

  valores = [
    {
      titulo: 'Misión',
      descripcion: 'Brindar educación de calidad, inclusiva e innovadora, formando ciudadanos íntegros y preparados para los desafíos del futuro.',
      iconPath: 'M12 5v14m7-7H5',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-700',
      borderColor: 'border-blue-500'
    },
    {
      titulo: 'Visión',
      descripcion: 'Ser una institución líder en educación, reconocida por su excelencia académica, innovación y compromiso con la comunidad.',
      iconPath: 'M3 12l7-7m0 0l7 7m-7-7v14',
      bgColor: 'bg-blue-200',
      iconColor: 'text-blue-800',
      borderColor: 'border-blue-600'
    }
  ];

}
