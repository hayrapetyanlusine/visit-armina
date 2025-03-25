import { Component, input } from '@angular/core';
import { TextContentComponent } from '../text-content/text-content.component';

@Component({
  selector: 'app-media-card',
  imports: [TextContentComponent],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss'
})
export class MediaCardComponent {
  public mediaTitle = input.required<string>();
  public text = input.required<string>();
  public img = input.required<string>();
}
