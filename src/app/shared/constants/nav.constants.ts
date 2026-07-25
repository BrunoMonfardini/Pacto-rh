import { NavLink } from '../types/nav-link.type';
import { ROUTES, SECTIONS } from './routes.constants';

/** As 4 seções âncora da home — base compartilhada entre header e footer. */
export const HOME_SECTION_LINKS: readonly NavLink[] = [
  { label: 'Início', route: ROUTES.home, fragment: SECTIONS.home },
  { label: 'Soluções', route: ROUTES.home, fragment: SECTIONS.solucoes },
  { label: 'Sobre', route: ROUTES.home, fragment: SECTIONS.sobre },
  { label: 'Contato', route: ROUTES.home, fragment: SECTIONS.contato },
];

/** Dropdown "Soluções": Empresas e Profissionais, cada um com página própria. */
const SOLUCOES_LINK: NavLink = {
  label: 'Soluções',
  route: ROUTES.empresa,
  children: [
    { label: 'Empresas', route: ROUTES.empresa },
    { label: 'Profissionais', route: ROUTES.profissional },
  ],
};

/** Nav do header: Soluções (dropdown) + DISC + Loja (ferramentas/rotas próprias). */
export const HEADER_NAV_LINKS: readonly NavLink[] = [
  HOME_SECTION_LINKS[0],
  SOLUCOES_LINK,
  HOME_SECTION_LINKS[2],
  { label: 'DISC', route: ROUTES.disc },
  { label: 'Loja', route: ROUTES.loja },
  HOME_SECTION_LINKS[3],
];

/** Nav do footer: seções da home + links diretos para Empresas/Profissionais/Loja. */
export const FOOTER_NAV_LINKS: readonly NavLink[] = [
  HOME_SECTION_LINKS[0],
  { label: 'Empresas', route: ROUTES.empresa },
  { label: 'Profissionais', route: ROUTES.profissional },
  { label: 'Loja', route: ROUTES.loja },
  HOME_SECTION_LINKS[2],
  HOME_SECTION_LINKS[3],
];
