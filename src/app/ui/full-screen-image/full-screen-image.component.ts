import { Component, inject } from '@angular/core';
import { FullScreenImgService } from '../../services/full-screen-img/full-screen-img.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-full-screen-image',
  imports: [NgOptimizedImage],
  templateUrl: './full-screen-image.component.html',
  styleUrl: './full-screen-image.component.scss'
})
export class FullScreenImageComponent {
  protected readonly fullScreen = inject(FullScreenImgService);
}
