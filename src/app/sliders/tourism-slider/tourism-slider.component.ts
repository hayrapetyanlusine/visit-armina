import { Component, ViewChild } from '@angular/core';
import { EmblaCarouselDirective } from '@zip-fa/ng-embla-carousel';
import type { EmblaOptionsType } from 'embla-carousel';
import { TourismSliderItemComponent } from './tourism-slider-item/tourism-slider-item.component';
import tourism from '../../../../public/tourism-slider.json';

@Component({
  selector: 'app-tourism-slider',
  imports: [EmblaCarouselDirective, TourismSliderItemComponent],
  templateUrl: './tourism-slider.component.html',
  styleUrl: './tourism-slider.component.scss'
})
export class TourismSliderComponent {
  @ViewChild(EmblaCarouselDirective, { static: true })
  private emblaCarousel!: EmblaCarouselDirective;
  public slideContent = tourism;
  public readonly options: EmblaOptionsType = {
    duration: 25,
  };
  scrollToPrev(): void {
    const { emblaApi } = this.emblaCarousel;

    if (emblaApi?.canScrollPrev()) {
      emblaApi.scrollPrev();
    }
  }

  scrollToNext(): void {
    const { emblaApi } = this.emblaCarousel;

    if (emblaApi?.canScrollNext()) {
      emblaApi.scrollNext();
    }
  }

}
