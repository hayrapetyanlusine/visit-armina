import { Component } from '@angular/core';
import { ContactFormComponent } from '../../ui/contact-form/contact-form.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    ContactFormComponent,
    NgOptimizedImage
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export default class ContactComponent {}
