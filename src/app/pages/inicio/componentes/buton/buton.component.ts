import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buton.component.html',
  styleUrl: './buton.component.scss'
})
export class ButonComponent {

  @Input() texto: string = 'Click Aquí';
  @Input() link: string = '#';
  @Input() color: 'blue' | 'green' | 'red' | 'gray' = 'blue';

}
