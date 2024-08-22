import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-stockpile-management-system',
  templateUrl: './stockpile-management-system.component.html',
  styleUrls: ['./stockpile-management-system.component.css']
})
export class StockpileManagementSystemComponent {
  public qrCodeData: string = 'http://localhost:4200/stockpile-management';

  constructor() {}

  downloadDescription() {
    const doc = new jsPDF('p', 'mm', 'a4');
    const element = document.getElementById('pdfContent');

    if (element) {
      element.classList.add('pdf-only');
    }

    if (element) {
      // Désactiver les animations
      element.classList.add('disable-animations');


      html2canvas(element, { scale: 4 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        this.addHeader(doc);

        // Ajouter la première page
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        const lineYPositionTop = 13;
        const lineYPositionBottom = 35;
        const lineLength = 220; // Longueur des lignes
        const lineXStart = (210 - lineLength) / 2;

        doc.setDrawColor('#003366'); // Couleur des lignes
        doc.setLineWidth(2); // Largeur des lignes
        doc.line(lineXStart, lineYPositionTop, lineXStart + lineLength, lineYPositionTop); // Ligne du dessus
        doc.line(lineXStart, lineYPositionBottom, lineXStart + lineLength, lineYPositionBottom); // Ligne du dessous


        // Ajouter des pages supplémentaires si nécessaire
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        // Ajouter le pied de page avec les contacts et la phrase élégante
        this.addFooter(doc);

        // Enregistrer le PDF
        doc.save('StockpileManagement.pdf');

        // Réactiver les animations
        element.classList.remove('disable-animations');
      });
    }
  }

  addHeader(doc: jsPDF) {
    const logoPath = '/assets/logos/jesa-logo.png';
    const headerHeight = 40;
    const darkBlue = '#003366'; // Couleur de fond sombre
    const logoWidth = 30;
    const logoHeight = 10;

    // Dessiner le rectangle de fond pour le header
    doc.setFillColor(darkBlue);
    doc.rect(0, 0, 210, headerHeight, 'F');

    // Ajouter le logo de JESA
    doc.addImage(logoPath, 'PNG', 10, 10, logoWidth, logoHeight);

    // Ajouter la description du projet
    doc.setFontSize(14);
    doc.setFont('Helvetica', 'bold');
    doc.setTextColor('#FFFFFF'); // Couleur du texte
    doc.text('Project Header', 105, 25, { align: 'center' }); // Ajustez la position du texte
  }



  addFooter(doc: jsPDF) {
    const phoneNumber = '+61 3 9412 6500';
    const email = 'jesagroups.com';
    const projectDescription = 'Your partner in innovative solutions';


    // Définir les styles pour le pied de page
    const footerHeight = 30;
    const darkBlue = '#003366'; // Couleur de fond sombre

    // Calculer la position Y du pied de page
    const yPosition = 295 - footerHeight + 5; // Déplacer le pied de page vers le bas

    // Dessiner le rectangle de fond pour le pied de page
    doc.setFillColor(darkBlue);
    doc.rect(0, yPosition, 210, footerHeight, 'F');

    // Ajouter la phrase élégante
    doc.setFontSize(12);
    doc.setFont('Courier', 'bold');
    doc.setTextColor('#FFFFFF'); // Couleur du texte
    doc.text('Stock to Port Digitalization', 105, yPosition + 12, { align: 'center' });


    const lineYPosition = yPosition + 15;
    doc.setDrawColor(255, 255, 255);
    doc.setLineWidth(0.5);
    const lineLength = 50; // Longueur de la ligne
    const lineXStart = (210 - lineLength) / 2; // Centrer la ligne horizontalement
    doc.line(lineXStart, lineYPosition, lineXStart + lineLength, lineYPosition);

    doc.setFontSize(9);
    doc.setFont('Courier', 'normal');
    doc.text('Your partner in innovative solutions', 105, lineYPosition + 5, { align: 'center' });

    // Ajouter les contacts à droite
    doc.setFontSize(8);
    doc.setFont('Helvetica', 'normal');
    const contactMargin = 150;
    doc.text(phoneNumber, 200, yPosition + 15, { align: 'right' });
    doc.text(email, 200, yPosition + 19, { align: 'right' });
  }
}
