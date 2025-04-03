import { Component } from '@angular/core';
import { ScrollTopDirective } from '../../directives/scroll-top/scroll-top.directive';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { HtmlPipe } from '../../pipes/html.pipe';

@Component({
  selector: 'app-footer',
  imports: [ScrollTopDirective, RouterLink, TranslocoPipe, HtmlPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
