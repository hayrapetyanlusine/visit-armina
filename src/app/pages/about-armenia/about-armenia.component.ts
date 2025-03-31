import { Component, inject, Signal } from '@angular/core';
import { PageHeaderComponent } from '../../ui/page-header/page-header.component';
import { MediaCardComponent } from '../../ui/media-card/media-card.component';
import { ArmeniaSliderComponent } from '../../sliders/armenia-slider/armenia-slider.component';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { NgOptimizedImage } from '@angular/common';
import { HtmlPipe } from '../../pipes/html.pipe';
import { toSignal } from '@angular/core/rxjs-interop';
import { Media } from '../../interfaces/media';

@Component({
  selector: 'app-about-armenia',
  imports: [
    PageHeaderComponent,
    MediaCardComponent,
    ArmeniaSliderComponent,
    TranslocoPipe,
    HtmlPipe,
    NgOptimizedImage
  ],
  templateUrl: './about-armenia.component.html',
  styleUrl: './about-armenia.component.scss',
})
export default class AboutArmeniaComponent {
  protected readonly translocoService = inject(TranslocoService);
  public media: Signal<Media[]> = toSignal(
    this.translocoService.selectTranslateObject('media'),
    { initialValue: [] as Media[] }
  );
}
