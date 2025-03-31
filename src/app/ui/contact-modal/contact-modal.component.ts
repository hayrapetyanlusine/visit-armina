import { Component, inject } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactModalService } from '../../services/contact-modal.service';

@Component({
  selector: 'app-contact-modal',
  imports: [ContactFormComponent],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss'
})
export class ContactModalComponent {
  protected readonly modalService = inject(ContactModalService);
}
