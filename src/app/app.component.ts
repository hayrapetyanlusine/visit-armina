import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { TranslocoService } from '@jsverse/transloco';
import { filter } from 'rxjs';
import en_json from '../../public/i18n/en.json';
import am_json from '../../public/i18n/am.json';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'visit-armina';
  private readonly translocoService = inject(TranslocoService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  constructor() {
    this.translocoService.setTranslation(en_json, 'en');
    // this.translocoService.setTranslation(ru_json, 'ru');
    this.translocoService.setTranslation(am_json, 'am');
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const lang = this.route.firstChild?.snapshot.data['lang'];
        if (['en', 'am'].includes(lang)) {
          if (
            this.translocoService.getActiveLang() ||
            this.translocoService.getActiveLang() !== lang
          ) {
            this.translocoService.setActiveLang(lang);
          }
        }
      });
  }
}
