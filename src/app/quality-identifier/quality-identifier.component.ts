import { Component } from '@angular/core';

@Component({
  selector: 'app-quality-identifier',
  templateUrl: './quality-identifier.component.html',
  styleUrl: './quality-identifier.component.css'
})
export class QualityIdentifierComponent {
  qrCodeData : string = 'http://localhost:4200/quality-identifier'; 

}
