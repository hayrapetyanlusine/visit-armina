import { Component, computed, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Place } from '../../interfaces/place';
import { PageHeaderComponent } from '../../ui/page-header/page-header.component';
import { HtmlPipe } from '../../pipes/html.pipe';
import { map } from 'rxjs';
import { MustSeeSliderComponent } from '../../sliders/must-see-slider/must-see-slider.component';

@Component({
  selector: 'app-must-to-see-details',
  imports: [PageHeaderComponent, HtmlPipe, MustSeeSliderComponent],
  templateUrl: './must-to-see-details.component.html',
  styleUrl: './must-to-see-details.component.scss'
})
export default class MustToSeeDetailsComponent {
  protected readonly translocoService = inject(TranslocoService);
  protected readonly route = inject(ActivatedRoute);

  private readonly placeId = toSignal(this.route.paramMap.pipe(
    map(params => params.get('id'))
  ));

  private readonly allPlaces = toSignal(
    this.translocoService.selectTranslateObject('must_to_see.places'),
    { initialValue: [] as Place[] }
  );

  public readonly place = computed(() =>
    this.allPlaces().find((place: Place) => place.id === this.placeId())
  );
}
