import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../ui/page-header/page-header.component';
import {
  TourismSliderItemComponent
} from '../../sliders/tourism-slider/tourism-slider-item/tourism-slider-item.component';

@Component({
  selector: 'app-must-to-see',
  imports: [
    PageHeaderComponent,
    TourismSliderItemComponent
  ],
  templateUrl: './must-to-see.component.html',
  styleUrl: './must-to-see.component.scss',
})
export default class MustToSeeComponent {}
