import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from '../../ui/page-header/page-header.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { HtmlPipe } from '../../pipes/html.pipe';
import { ContactModalService } from '../../services/contact-modal.service';

@Component({
  selector: 'app-useful-information',
  imports: [PageHeaderComponent, TranslocoPipe, HtmlPipe],
  templateUrl: './useful-information.component.html',
  styleUrl: './useful-information.component.scss',
})
export default class UsefulInformationComponent {
  protected readonly modalService = inject(ContactModalService);
}
