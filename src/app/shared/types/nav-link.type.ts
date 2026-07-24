export interface NavLink {
  label: string;
  route: string;
  /** Fragmento de âncora na home (ex.: 'solucoes'). Omitido para rotas próprias. */
  fragment?: string;
}
