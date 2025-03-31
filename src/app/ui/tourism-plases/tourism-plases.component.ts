import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollTopDirective } from '../../directives/scroll-top/scroll-top.directive';

@Component({
  selector: 'app-tourism-plases',
  imports: [RouterLink, ScrollTopDirective],
  templateUrl: './tourism-plases.component.html',
  styleUrl: './tourism-plases.component.scss'
})
export class TourismPlasesComponent {
  public img = input.required<string>();
  public name = input.required<string>();
  public link = input.required<string[]>();
  public isSlideItem = input<boolean>();
}
