import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { link } from 'fs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  NavItems = [
    { name :'Inicio' , link: '/inicio' },
    { name :'Grupo' , link: '/nosotros' },
    { name :'Conocenos' , link: '/conocenos' },
    { name :'Dashboard' , link: '/dashboard' },
  ]


  isMenuOpen = false; // ✅ Corrección aquí

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
