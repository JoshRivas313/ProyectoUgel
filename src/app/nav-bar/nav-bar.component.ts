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
    { name :'nosotros' , link: '/nosotros' },
    { name :'conocenos' , link: '/conocenos' },
    { name :'dashboard' , link: '/dashboard' },
  ]


  isMenuOpen = false; // ✅ Corrección aquí

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
