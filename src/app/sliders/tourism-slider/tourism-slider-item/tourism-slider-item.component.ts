import { Component, inject, input } from '@angular/core';
import { FullScreenImgService } from '../../../services/full-screen-img/full-screen-img.service';

@Component({
  selector: 'app-tourism-slider-item',
  imports: [],
  templateUrl: './tourism-slider-item.component.html',
  styleUrl: './tourism-slider-item.component.scss'
})
export class TourismSliderItemComponent {
  protected readonly fullScreen = inject(FullScreenImgService);
  public img = input.required<string>();
  public name = input.required<string>();
}
