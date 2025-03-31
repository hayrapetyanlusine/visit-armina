import { Component, computed, inject, Signal, ViewChild } from '@angular/core';
import { EmblaCarouselDirective } from '@zip-fa/ng-embla-carousel';
import type { EmblaOptionsType } from 'embla-carousel';
import { TourismPlasesComponent } from '../../ui/tourism-plases/tourism-plases.component';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { Place } from '../../interfaces/place';

@Component({
  selector: 'app-must-see-slider',
  imports: [EmblaCarouselDirective, TourismPlasesComponent, TranslocoPipe],
  templateUrl: './must-see-slider.component.html',
  styleUrl: './must-see-slider.component.scss'
})
export class MustSeeSliderComponent {
  @ViewChild(EmblaCarouselDirective, { static: true })
  private emblaCarousel!: EmblaCarouselDirective;
  public readonly options: EmblaOptionsType = {
    duration: 25,
  };
  private readonly translocoService = inject(TranslocoService);

  private translatedPlaces = toSignal(
    this.translocoService.selectTranslateObject('must_to_see.places'),
    { initialValue: [] as Place[] }
  );

  public places: Signal<Place[]> = computed(() => this.translatedPlaces());
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
