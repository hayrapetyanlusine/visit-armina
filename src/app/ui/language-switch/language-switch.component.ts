import { Component, inject, OnInit, signal } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { Langs } from '../../interfaces/langs';

@Component({
  selector: 'app-language-switch',
  imports: [],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss'
})
export class LanguageSwitchComponent implements OnInit {
  private readonly transloco = inject(TranslocoService);
  public currentLang = signal(this.transloco.getActiveLang() || this.transloco.getDefaultLang());
  public languages = signal<string[]>([]);
  public isOpen = signal(false);

  ngOnInit() {
    this.setAvailableLanguages();

    this.transloco.langChanges$.subscribe(lang => {
      this.currentLang.set(lang);
    });
  }

  private setAvailableLanguages(): void {
    const availableLangs = this.transloco.getAvailableLangs();

    if (Array.isArray(availableLangs)) {
      if (typeof availableLangs[0] === 'string') {
        this.languages.set(availableLangs as string[]);
      } else {
        this.languages.set((availableLangs as Langs[]).map(lang => lang.id));
      }
    }
  }

  onChange(lang: string): void {
    if (lang !== this.currentLang()) {
      this.transloco.setActiveLang(lang);
    }
  }

  isActive(lang: string): boolean {
    return this.currentLang() === lang;
  }

  openContent(): void {
    this.isOpen.update(open => !open);
  }
}
