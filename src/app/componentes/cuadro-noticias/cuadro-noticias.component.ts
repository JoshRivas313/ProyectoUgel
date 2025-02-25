import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuadro-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuadro-noticias.component.html',
  styleUrl: './cuadro-noticias.component.scss'
})

export class CuadroNoticiasComponent {

  eventos = [
    {
      titulo: 'Innovación Educativa 2024',
      fecha: '15 Marzo 2024',
      descripcion: 'Implementación de nuevas tecnologías en el aula para mejorar el aprendizaje.',
      imagen: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' // Reemplázalo con la ruta de la imagen real
    },
    {
      titulo: 'Programa de Mentoría Docente',
      fecha: '10 Abril 2024',
      descripcion: 'Lanzamiento de un programa de mentoría para apoyar a nuevos docentes.',
      imagen: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' // Reemplázalo con la ruta de la imagen real
    },
    {
      titulo: 'Feria de Ciencias Virtual',
      fecha: '5 Mayo 2024',
      descripcion: 'Primera feria de ciencias virtual para estudiantes de toda la región.',
      imagen: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' // Reemplázalo con la ruta de la imagen real
    }
  ];
}
