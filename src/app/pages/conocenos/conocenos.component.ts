import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaudroCentradoComponent } from '../../componentes/caudro-centrado/caudro-centrado.component';
import { SubTituloComponent } from '../../componentes/sub-titulo/sub-titulo.component';

@Component({
  selector: 'app-conocenos',
  standalone: true,
  imports: [CommonModule, CaudroCentradoComponent, SubTituloComponent],
  templateUrl: './conocenos.component.html',
  styleUrl: './conocenos.component.scss'
})

export class ConocenosComponent {


  historias = [
    {
      titulo: 'Más de 20 años promoviendo educación',
      descripcion: 'UGEL Santa, una institución comprometida con la excelencia y la formación de nuevas generaciones.',
      contenido1: 'Desde su fundación, la Unidad de Gestión Educativa Local (UGEL) Santa ha trabajado incansablemente para mejorar la calidad educativa en la región.',
      contenido2: 'A lo largo de los años, hemos desarrollado programas de innovación, inclusión y formación docente, garantizando que cada estudiante tenga acceso a una educación transformadora y de calidad.',
      link: '/historia',
      imagen: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80',
    },
    // Puedes agregar más objetos si deseas más secciones
  ];




}
