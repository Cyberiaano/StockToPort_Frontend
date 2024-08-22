import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import axios from 'axios';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailDTO } from '../Models/email-dto.model';
import { EmailService } from '../Services/email.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  name: string = '';
  email: string = '';
  message: string = '';
  statusMessage: string | null = null;
  messageType: 'success' | 'error' = 'success';
  isLoading: boolean = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;


  constructor(private emailService: EmailService, private cd: ChangeDetectorRef) { }

  onSubmit(event: Event) {
    event.preventDefault();
    this.isLoading = true;
    this.successMessage = null;
    this.errorMessage = null;

    const emailDTO: EmailDTO = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.emailService.sendEmail(emailDTO).subscribe(
      response => {
        this.isLoading = false;
        this.successMessage = "Email sent successfully!";
        this.resetForm(); // Réinitialiser le formulaire
      },
      error => {
        this.isLoading = false;
        this.errorMessage = "There was an error sending your message.";
      }
    );
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.cd.detectChanges(); // Forcer la détection des changements si nécessaire
  }

}
