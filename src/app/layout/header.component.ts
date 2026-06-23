import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMobileOpen = signal(false);
  isDropdownOpen = signal(false);

  toggleMobile(): void { this.isMobileOpen.update(v => !v); }
  closeMobile(): void  { this.isMobileOpen.set(false); }
  toggleDropdown(): void { this.isDropdownOpen.update(v => !v); }
  closeDropdown(): void  { this.isDropdownOpen.set(false); }
}