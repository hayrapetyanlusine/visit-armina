import { Component, computed, inject, Signal } from '@angular/core';
import { PageHeaderComponent } from '../../ui/page-header/page-header.component';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { HtmlPipe } from '../../pipes/html.pipe';
import { toSignal } from '@angular/core/rxjs-interop';
import { Place } from '../../interfaces/place';
import { TourismPlasesComponent } from '../../ui/tourism-plases/tourism-plases.component';

@Component({
  selector: 'app-must-to-see',
  imports: [
    PageHeaderComponent,
    TranslocoPipe,
    HtmlPipe,
    TourismPlasesComponent
  ],
  templateUrl: './must-to-see.component.html',
  styleUrl: './must-to-see.component.scss',
})
export default class MustToSeeComponent {
  private readonly translocoService = inject(TranslocoService);

  private translatedPlaces = toSignal(
    this.translocoService.selectTranslateObject('must_to_see.places'),
    { initialValue: [] as Place[] }
  );

  public places: Signal<Place[]> = computed(() => this.translatedPlaces());
}
