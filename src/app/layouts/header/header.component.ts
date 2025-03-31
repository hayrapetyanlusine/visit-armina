import { Component, HostListener, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LanguageSwitchComponent } from '../../ui/language-switch/language-switch.component';
import { BurgerMenuComponent } from '../../ui/burger-menu/burger-menu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ScrollTopDirective } from '../../directives/scroll-top/scroll-top.directive';

@Component({
  selector: 'app-header',
  imports: [
    TranslocoPipe,
    LanguageSwitchComponent,
    BurgerMenuComponent,
    RouterLink,
    ScrollTopDirective,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public isScrolled = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 100);
  }
}
