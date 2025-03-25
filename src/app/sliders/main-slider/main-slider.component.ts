import { Component } from '@angular/core';
import { EmblaCarouselDirective } from '@zip-fa/ng-embla-carousel';
import { MainSliderItemComponent } from './main-slider-item/main-slider-item.component';
import type { EmblaOptionsType, EmblaPluginType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import slideData from '../../../../public/main-slide.json';

@Component({
  selector: 'app-main-slider',
  imports: [EmblaCarouselDirective, MainSliderItemComponent],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.scss'
})
export class MainSliderComponent {
  protected readonly slideData = slideData;

  public readonly options: EmblaOptionsType = {
    duration: 25,
    loop: true,
  };

  public readonly plugins: EmblaPluginType[] = [Autoplay({ delay: 4000 })];
}
