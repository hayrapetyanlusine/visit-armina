import { Routes } from '@angular/router';

const children = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/main/main.component').then((c) => c.MainComponent),
  },
  {
    path: 'about-armenia',
    loadComponent: async () =>
      import('./pages/about-armenia/about-armenia.component'),
  },
  {
    path: 'our-tours',
    loadComponent: async () => import('./pages/our-tours/our-tours.component'),
  },
  {
    path: 'must-to-see',
    loadComponent: async () =>
      import('./pages/must-to-see/must-to-see.component'),
  },
  {
    path: 'useful-information',
    loadComponent: async () =>
      import('./pages/useful-information/useful-information.component'),
  },
  {
    path: 'who-we-are',
    loadComponent: async () =>
      import('./pages/who-we-are/who-we-are.component'),
  },
  {
    path: 'gallery',
    loadComponent: async () => import('./pages/gallery/gallery.component'),
  },
  {
    path: 'contact',
    loadComponent: async () => import('./pages/contact/contact.component'),
  },
];

export const routes: Routes = [
  {
    path: '',
    data: { lang: 'en' },
    children: children,
  },
  {
    path: 'am',
    data: { lang: 'am' },
    children: children,
  },
  {
    path: 'en',
    data: { lang: 'en' },
    children: children,
  },
  {
    path: 'ru',
    data: { lang: 'ru' },
    children: children,
  },
];
