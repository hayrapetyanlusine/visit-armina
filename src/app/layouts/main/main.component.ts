import { Component } from '@angular/core';
import { MainSliderComponent } from '../../sliders/main-slider/main-slider.component';
import { TextContentComponent } from '../../ui/text-content/text-content.component';
import { TourismSliderComponent } from '../../sliders/tourism-slider/tourism-slider.component';
import { MainGalleryComponent } from '../../ui/main-gallery/main-gallery.component';
import { VideosComponent } from '../../ui/videos/videos.component';
import { ContactModalComponent } from '../../ui/contact-modal/contact-modal.component';
import { FullScreenImageComponent } from '../../ui/full-screen-image/full-screen-image.component';

@Component({
  selector: 'app-main',
  imports: [
    MainSliderComponent,
    TextContentComponent,
    TourismSliderComponent,
    MainGalleryComponent,
    VideosComponent,
    ContactModalComponent,
    FullScreenImageComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {}
