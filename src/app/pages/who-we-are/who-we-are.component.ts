import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../ui/page-header/page-header.component';
import { HtmlPipe } from '../../pipes/html.pipe';
import { TranslocoPipe } from '@jsverse/transloco';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-who-we-are',
  imports: [
    PageHeaderComponent,
    HtmlPipe,
    TranslocoPipe,
    NgOptimizedImage
  ],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.scss',
})
export default class WhoWeAreComponent {}
