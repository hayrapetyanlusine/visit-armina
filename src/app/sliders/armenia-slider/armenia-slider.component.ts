import { Component, ViewChild } from '@angular/core';
import { EmblaCarouselDirective } from '@zip-fa/ng-embla-carousel';
import tourism from '../../../../public/armenia.slide.json';
import type { EmblaOptionsType } from 'embla-carousel';
import { ArmeniaSliderItemComponent } from './armenia-slider-item/armenia-slider-item.component';

@Component({
  selector: 'app-armenia-slider',
  imports: [EmblaCarouselDirective, ArmeniaSliderItemComponent],
  templateUrl: './armenia-slider.component.html',
  styleUrl: './armenia-slider.component.scss'
})
export class ArmeniaSliderComponent {
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
