import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-backoffice',
  templateUrl: './header-backoffice.component.html',
  styleUrl: './header-backoffice.component.css',
})
export class HeaderBackofficeComponent {
  @Input() title: string | undefined;
}
