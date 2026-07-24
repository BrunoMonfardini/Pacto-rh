import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavLink {
  label: string;
  route: string;
  fragment?: string;
}

interface ContactLine {
  icon: string;
  label: string;
  href?: string;
}

interface SocialLink {
  label: string;
  icon: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  readonly navLinks: NavLink[] = [
    { label: 'Início', route: '/', fragment: 'home' },
    { label: 'Soluções', route: '/', fragment: 'solucoes' },
    { label: 'Empresas', route: '/empresa' },
    { label: 'Profissionais', route: '/profissional' },
    { label: 'Sobre', route: '/', fragment: 'sobre' },
    { label: 'Contato', route: '/', fragment: 'contato' },
  ];

  readonly contactLines: ContactLine[] = [
    { icon: 'fas fa-envelope', label: 'contato@pactorh.com.br', href: 'mailto:contato@pactorh.com.br' },
    { icon: 'fas fa-phone', label: '(11) 0000-0000', href: 'tel:+551100000000' },
    { icon: 'fab fa-whatsapp', label: '(11) 90000-0000', href: 'https://wa.me/5511900000000' },
    { icon: 'fas fa-map-marker-alt', label: 'São Paulo, SP' },
  ];

  readonly socialLinks: SocialLink[] = [
    { label: 'LinkedIn', icon: 'fab fa-linkedin-in', href: 'https://linkedin.com' },
    { label: 'Instagram', icon: 'fab fa-instagram', href: 'https://instagram.com' },
    { label: 'Facebook', icon: 'fab fa-facebook-f', href: 'https://facebook.com' },
    { label: 'YouTube', icon: 'fab fa-youtube', href: 'https://youtube.com' },
  ];
}
