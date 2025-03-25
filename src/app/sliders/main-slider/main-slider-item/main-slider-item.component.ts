import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main-slider-item',
  imports: [],
  templateUrl: './main-slider-item.component.html',
  styleUrl: './main-slider-item.component.scss'
})
export class MainSliderItemComponent {
  public img = input.required<string>();
}
