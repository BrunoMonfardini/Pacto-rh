import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER_NAV_LINKS } from '../shared/constants/nav.constants';
import { COMPANY_CONTACT, COMPANY_SOCIAL_LINKS } from '../shared/constants/company.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
  readonly navLinks = FOOTER_NAV_LINKS;
  readonly contactLines = COMPANY_CONTACT;
  readonly socialLinks = COMPANY_SOCIAL_LINKS;
}
