import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuadro-grupo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuadro-grupo.component.html',
  styleUrl: './cuadro-grupo.component.scss'
})
export class CuadroGrupoComponent {
  students = [
    {
      name: 'Jose Hurtado Rivas',
      img:'',
      career: 'Ingeniería de Sistemas',
      cycle: '9no ciclo',
      skills: ['Frontend Development', 'UI/UX Design', 'React', 'Next.js'],
      contact: ['Email', 'GitHub', 'LinkedIn']
    },
    {
      name: 'Carlos Sebastián Angulo Díaz',
      career: 'Ingeniería de Sistemas',
      cycle: '9no ciclo',
      skills: ['Backend Development', 'Database Design', 'Node.js', 'Python'],
      contact: ['Email', 'GitHub', 'LinkedIn']
    },
    {
      name: 'Carlos Daniel Luciano Ramirez',
      career: 'Ingeniería Industrial',
      cycle: '9no ciclo',
      skills: ['Process Optimization', 'Project Management', 'Data Analysis', 'Lean Six Sigma'],
      contact: ['Email', 'GitHub', 'LinkedIn']
    },
    {
      name: 'Luis Eduardo Gongora Alegre',
      career: 'Ingeniería Industrial',
      cycle: '9no ciclo',
      skills: ['Quality Management', 'Process Improvement', 'Supply Chain', 'Business Analytics'],
      contact: ['Email', 'GitHub', 'LinkedIn']
    }
  ];

}
