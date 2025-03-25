import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tourism-slider-item',
  imports: [],
  templateUrl: './tourism-slider-item.component.html',
  styleUrl: './tourism-slider-item.component.scss'
})
export class TourismSliderItemComponent {
  public img = input.required<string>();
  public name = input.required<string>();
}
