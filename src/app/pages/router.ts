import { inject, Injectable } from '@angular/core';
import {
  NavigationExtras,
  Router,
  UrlSerializer,
  UrlTree,
} from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root',
})
export class CustomRouter extends Router {
  private translateService = inject(TranslocoService);
  private serializer = inject(UrlSerializer);

  override navigateByUrl(
    url: string | UrlTree,
    extras?: NavigationExtras
  ): Promise<boolean> {
    const lang = this.translateService.getActiveLang();
    if (lang) {
      if (typeof url === 'string') {
        if (url.startsWith('/')) {
          url = '/' + lang + (url === '/' ? '' : url);
        }
      } else {
        const urlTree = url;
        const segments = [
          ...(urlTree.root.children['primary']?.segments || []),
        ];
        if (segments.length === 0 || segments[0].path !== lang) {
          const newUrlTree = this.serializer.parse('/' + lang);
          if (segments.length > 0) {
            const remainingUrl = this.serializer.serialize(urlTree);
            const pathToAdd = remainingUrl.startsWith('/')
              ? remainingUrl.substring(1)
              : remainingUrl;
            url = this.serializer.parse('/' + lang + '/' + pathToAdd);
          } else {
            url = newUrlTree;
          }
        }
      }
    }
    return super.navigateByUrl(url, extras);
  }

  override isActive(url: any, matchOptions: any): boolean {
    const lang = this.translateService.getActiveLang();

    let urlTree: UrlTree;
    if (typeof url === 'string') {
      urlTree = this.parseUrl(url);
    } else {
      urlTree = url;
    }

    if (lang) {
      const segments = urlTree.root.children['primary']?.segments || [];

      if (segments.length > 0 && segments[0].path !== lang) {
        const modifiedUrl = this.createUrlTree([
          lang,
          ...segments.map((s) => s.path),
        ]);
        return super.isActive(modifiedUrl, matchOptions);
      }
    }

    return super.isActive(url, matchOptions);
  }
}
