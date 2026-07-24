import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HEADER_NAV_LINKS } from '../shared/constants/nav.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly navItems = HEADER_NAV_LINKS;

  isMobileOpen = signal(false);

  toggleMobile(): void { this.isMobileOpen.update(v => !v); }
  closeMobile(): void  { this.isMobileOpen.set(false); }
}
