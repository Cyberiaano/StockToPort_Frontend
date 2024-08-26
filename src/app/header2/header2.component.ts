import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.scss'
})
export class Header2Component implements AfterViewInit {

  ngAfterViewInit(): void {
    this.initializeMenu();
  }

  private initializeMenu(): void {
    const navToggle = document.getElementById('nav-toggle') as HTMLElement;
    const navClose = document.getElementById('nav-close') as HTMLElement;
    const navMenu = document.getElementById('nav-menu') as HTMLElement;

    if (navToggle && navClose && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        navToggle.style.display = 'none'; // Masquer le bouton d'ouverture du menu
        navClose.style.display = 'block'; // Afficher le bouton de fermeture
      });

      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navToggle.style.display = 'block'; // Afficher le bouton d'ouverture du menu
        navClose.style.display = 'none'; // Masquer le bouton de fermeture
      });
    }
  }
}
