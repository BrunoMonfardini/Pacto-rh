import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  links = {
    servicos: [
      { label: 'Treinamentos Corporativos', href: '/treinamentos' },
      { label: 'Coaching Executivo', href: '/solucoes' },
      { label: 'Palestras', href: '/solucoes' },
      { label: 'Consultoria em RH', href: '/solucoes' },
    ],
    empresa: [
      { label: 'Sobre Nós', href: '/sobre' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contato', href: '/contato' },
    ],
    social: [
      { label: 'Instagram', icon: 'fab fa-instagram', href: 'https://instagram.com' },
      { label: 'LinkedIn',  icon: 'fab fa-linkedin',  href: 'https://linkedin.com' },
      { label: 'YouTube',   icon: 'fab fa-youtube',   href: 'https://youtube.com' },
      { label: 'Facebook',  icon: 'fab fa-facebook',  href: 'https://facebook.com' },
    ],
  };
}