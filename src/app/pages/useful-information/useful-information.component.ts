import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../ui/page-header/page-header.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { HtmlPipe } from '../../pipes/html.pipe';

@Component({
  selector: 'app-useful-information',
  imports: [
    PageHeaderComponent,
    TranslocoPipe,
    HtmlPipe
  ],
  templateUrl: './useful-information.component.html',
  styleUrl: './useful-information.component.scss',
})
export default class UsefulInformationComponent {}
