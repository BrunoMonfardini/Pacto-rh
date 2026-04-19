import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMobileOpen = signal(false);
  activeDropdown = signal<string | null>(null);

  navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Soluções',
      href: '/solucoes',
      children: [
        { label: 'Para Empresas', href: '/solucoes' },
        { label: 'Para Profissionais', href: '/solucoes/profissionais' },
      ],
    },
    { label: 'Treinamentos', href: '/treinamentos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Sobre', href: '/sobre' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

  toggleMobile(): void {
    this.isMobileOpen.update((v) => !v);
  }

  closeMobile(): void {
    this.isMobileOpen.set(false);
  }

  toggleDropdown(label: string): void {
    this.activeDropdown.update((v) => (v === label ? null : label));
  }
}