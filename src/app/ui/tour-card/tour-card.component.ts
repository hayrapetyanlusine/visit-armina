import { Component, input } from '@angular/core';
import { HtmlPipe } from '../../pipes/html.pipe';

@Component({
  selector: 'app-tour-card',
  imports: [HtmlPipe],
  templateUrl: './tour-card.component.html',
  styleUrl: './tour-card.component.scss'
})
export class TourCardComponent {
  public name = input.required<string>();
  public text = input.required<string>();
}
