import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-content',
  imports: [],
  templateUrl: './text-content.component.html',
  styleUrl: './text-content.component.scss'
})
export class TextContentComponent {
  public contentTitle = input.required<string>();
  public text = input.required<string>();
}
