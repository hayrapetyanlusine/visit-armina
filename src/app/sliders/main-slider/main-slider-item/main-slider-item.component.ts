import { Component, inject, input } from '@angular/core';
import { ContactModalService } from '../../../services/modal/contact-modal.service';

@Component({
  selector: 'app-main-slider-item',
  imports: [],
  templateUrl: './main-slider-item.component.html',
  styleUrl: './main-slider-item.component.scss'
})
export class MainSliderItemComponent {
  protected readonly modalService = inject(ContactModalService);
  public img = input.required<string>();
}
