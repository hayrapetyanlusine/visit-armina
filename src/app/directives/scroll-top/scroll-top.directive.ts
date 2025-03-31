import { Directive } from '@angular/core';

@Directive({
  selector: '[appScrollTop]',
  host: {
    '(click)': 'onClick($event)',
  }
})
export class ScrollTopDirective {
  onClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
