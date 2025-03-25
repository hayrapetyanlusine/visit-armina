import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../ui/page-header/page-header.component';
import { MediaCardComponent } from '../../ui/media-card/media-card.component';
import { ArmeniaSliderComponent } from '../../sliders/armenia-slider/armenia-slider.component';

@Component({
  selector: 'app-about-armenia',
  imports: [
    PageHeaderComponent,
    MediaCardComponent,
    ArmeniaSliderComponent
  ],
  templateUrl: './about-armenia.component.html',
  styleUrl: './about-armenia.component.scss',
})
export default class AboutArmeniaComponent {}
