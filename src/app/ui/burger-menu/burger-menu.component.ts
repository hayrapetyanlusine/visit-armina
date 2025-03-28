import { Component, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LanguageSwitchComponent } from '../language-switch/language-switch.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  imports: [TranslocoPipe, LanguageSwitchComponent, RouterLink],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  public isOpenBurger = signal(false);

  openBurger(): void {
    this.isOpenBurger.update(open => !open);
  }

  closeBurger(): void {
    this.isOpenBurger.set(false);
  }
}
