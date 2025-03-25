import { Component, input } from '@angular/core';

@Component({
  selector: 'app-armenia-slider-item',
  imports: [],
  templateUrl: './armenia-slider-item.component.html',
  styleUrl: './armenia-slider-item.component.scss'
})
export class ArmeniaSliderItemComponent {
  public img = input.required<string>();
}
