import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
  fragment?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly navItems: NavItem[] = [
    { label: 'Home', route: '/', fragment: 'home' },
    { label: 'Soluções', route: '/', fragment: 'solucoes' },
    { label: 'Sobre', route: '/', fragment: 'sobre' },
    { label: 'DISC', route: '/disc' },
    { label: 'Contato', route: '/', fragment: 'contato' },
  ];

  isMobileOpen = signal(false);

  toggleMobile(): void { this.isMobileOpen.update(v => !v); }
  closeMobile(): void  { this.isMobileOpen.set(false); }
}
