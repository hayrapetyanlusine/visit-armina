import { Component, inject, Signal } from '@angular/core';
import { PageHeaderComponent } from '../../ui/page-header/page-header.component';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { Tours } from '../../interfaces/tours';
import { TourCardComponent } from '../../ui/tour-card/tour-card.component';

@Component({
  selector: 'app-our-tours',
  imports: [PageHeaderComponent, TourCardComponent, TranslocoPipe],
  templateUrl: './our-tours.component.html',
  styleUrl: './our-tours.component.scss',
})
export default class OurToursComponent {
  protected readonly translocoService = inject(TranslocoService);
  public toures: Signal<Tours[]> = toSignal(
    this.translocoService.selectTranslateObject('our_tours.types_of_tours'),
    { initialValue: [] as Tours[] }
  );
}
