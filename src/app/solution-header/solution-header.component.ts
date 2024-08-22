import { Component } from '@angular/core';

@Component({
  selector: 'app-solution-header',
  templateUrl: './solution-header.component.html',
  styleUrl: './solution-header.component.css'
})
export class SolutionHeaderComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
