import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HEADER_NAV_LINKS } from '../shared/constants/nav.constants';
import { ROUTES } from '../shared/constants/routes.constants';
import { AuthService } from '../core/services/auth.service';
import { ButtonComponent } from '../shared/components/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);

  readonly navItems = HEADER_NAV_LINKS;
  readonly ROUTES = ROUTES;

  readonly currentUser = this.authService.currentUser;
  readonly isAuthenticated = this.authService.isAuthenticated;

  isMobileOpen = signal(false);

  toggleMobile(): void { this.isMobileOpen.update(v => !v); }
  closeMobile(): void  { this.isMobileOpen.set(false); }

  logout(): void {
    this.closeMobile();
    this.authService.logout();
  }
}
