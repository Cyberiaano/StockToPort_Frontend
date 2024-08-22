import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private backgrounds: string[] = [
    'assets/backgrounds/background1.png',
    'assets/backgrounds/background3.png',
    'assets/backgrounds/background2.png',
    'assets/backgrounds/background4.png',
    'assets/backgrounds/background5.png',
    'assets/backgrounds/background6.png',
    'assets/backgrounds/background7.png',
    'assets/backgrounds/background8.png'



  ];
  private currentBackgroundIndex: number = 0;

  ngOnInit() {
    this.changeBackground();
  }

  private changeBackground() {
    setInterval(() => {
      this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgrounds.length;
      const heroSection = document.querySelector('.hero') as HTMLElement;
      if (heroSection) {
        heroSection.style.backgroundImage = `url(${this.backgrounds[this.currentBackgroundIndex]})`;
      }
    }, 5000);
  }
}
