import { NavLink } from '../types/nav-link.type';
import { ROUTES, SECTIONS } from './routes.constants';

/** As 4 seções âncora da home — base compartilhada entre header e footer. */
export const HOME_SECTION_LINKS: readonly NavLink[] = [
  { label: 'Início', route: ROUTES.home, fragment: SECTIONS.home },
  { label: 'Soluções', route: ROUTES.home, fragment: SECTIONS.solucoes },
  { label: 'Sobre', route: ROUTES.home, fragment: SECTIONS.sobre },
  { label: 'Contato', route: ROUTES.home, fragment: SECTIONS.contato },
];

/** Nav do header: seções da home + DISC (ferramenta própria, rota separada). */
export const HEADER_NAV_LINKS: readonly NavLink[] = [
  HOME_SECTION_LINKS[0],
  HOME_SECTION_LINKS[1],
  HOME_SECTION_LINKS[2],
  { label: 'DISC', route: ROUTES.disc },
  HOME_SECTION_LINKS[3],
];

/** Nav do footer: seções da home + links diretos para Empresas/Profissionais. */
export const FOOTER_NAV_LINKS: readonly NavLink[] = [
  HOME_SECTION_LINKS[0],
  HOME_SECTION_LINKS[1],
  { label: 'Empresas', route: ROUTES.empresa },
  { label: 'Profissionais', route: ROUTES.profissional },
  HOME_SECTION_LINKS[2],
  HOME_SECTION_LINKS[3],
];
