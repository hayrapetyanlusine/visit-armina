import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);
  protected readonly contactForm: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required]],
    subject: [null, [Validators.required]],
    message: [null, [Validators.required]],
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
