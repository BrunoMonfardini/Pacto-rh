import { ContactLine, SocialLink } from '../types/footer.type';

/** Dados institucionais da PactoRH — fonte única para footer e páginas de contato. */
export const COMPANY_CONTACT: readonly ContactLine[] = [
  { icon: 'fas fa-envelope', label: 'contato@pactorh.com.br', href: 'mailto:contato@pactorh.com.br' },
  { icon: 'fas fa-phone', label: '(11) 0000-0000', href: 'tel:+551100000000' },
  { icon: 'fab fa-whatsapp', label: '(11) 90000-0000', href: 'https://wa.me/5511900000000' },
  { icon: 'fas fa-map-marker-alt', label: 'São Paulo, SP' },
];

export const COMPANY_SOCIAL_LINKS: readonly SocialLink[] = [
  { label: 'LinkedIn', icon: 'fab fa-linkedin-in', href: 'https://linkedin.com' },
  { label: 'Instagram', icon: 'fab fa-instagram', href: 'https://instagram.com' },
  { label: 'Facebook', icon: 'fab fa-facebook-f', href: 'https://facebook.com' },
  { label: 'YouTube', icon: 'fab fa-youtube', href: 'https://youtube.com' },
];
