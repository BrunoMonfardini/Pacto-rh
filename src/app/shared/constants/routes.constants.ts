/** Caminhos de rota centralizados — evita strings mágicas espalhadas pelo app. */
export const ROUTES = {
  home: '/',
  empresa: '/empresa',
  profissional: '/profissional',
  disc: '/disc',
  sobre: '/sobre',
  contato: '/contato',
  blog: '/blog',
  produtos: '/produtos',
  login: '/auth/login',
  register: '/auth/register',
} as const;

/** Âncoras (fragments) das seções da home, usadas pelo scroll suave. */
export const SECTIONS = {
  home: 'home',
  solucoes: 'solucoes',
  sobre: 'sobre',
  contato: 'contato',
} as const;
