import { Component, input } from '@angular/core';
import { HtmlPipe } from '../../pipes/html.pipe';

@Component({
  selector: 'app-media-card',
  imports: [HtmlPipe],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss'
})
export class MediaCardComponent {
  public mediaTitle = input.required<string>();
  public text = input.required<string>();
  public img = input.required<string>();
}
