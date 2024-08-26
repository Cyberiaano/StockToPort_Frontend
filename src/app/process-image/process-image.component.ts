import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process-image',
  templateUrl: './process-image.component.html',
  styleUrls: ['./process-image.component.css']
})
export class ProcessImageComponent implements OnInit {

  points = [
    { top: '65%', left: '37%', info: 'Stockpile Management' },
    { top: '76%', left: '45%', info: 'Quality Identifer' },
    { top: '70%', left: '80%', info: 'Scraper Automation' }
  ];

  selectedInfo: string | null = null;
  infoBoxTop: string = '0';
  infoBoxLeft: string = '0';
  displayedText: string = '';
  typingInterval: any;
  showNavigateButton: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      const icons = document.querySelectorAll('.icon');
      icons.forEach(icon => {
        icon.classList.add('animated');
      });
    }, 500);

    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }

  showInfo(event: MouseEvent, info: string) {
    event.stopPropagation();
    this.clearTypingInterval();
    this.selectedInfo = info;
    const offsetX = 20;
    const offsetY = -40;
    this.infoBoxTop = `${event.clientY + window.scrollY + offsetY}px`;
    this.infoBoxLeft = `${event.clientX + window.scrollX + 20}px`;
    this.displayedText = '';
    this.typeText(info);

    this.showNavigateButton = true;
  }

  clearTypingInterval() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  typeText(text: string) {
    let index = 0;
    this.typingInterval = setInterval(() => {
      if (index < text.length) {
        this.displayedText += text[index];
        index++;
      } else {
        clearInterval(this.typingInterval);
      }
    }, 50);
  }

  navigateToPage() {
    const pageMap: { [key: string]: string } = {
      'Stockpile Management': '/stockpile-management',
      'Quality Identifer': '/quality-identifier',
      'Scraper Automation': ''
    };
    const url = pageMap[this.selectedInfo!];
    if (url) {
      this.router.navigate([url]);
    }
  }

  onDocumentClick() {
    this.selectedInfo = null;
  }
}
