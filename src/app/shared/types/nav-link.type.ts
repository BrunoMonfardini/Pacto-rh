export interface NavLink {
  label: string;
  route: string;
  /** Fragmento de âncora na home (ex.: 'solucoes'). Omitido para rotas próprias. */
  fragment?: string;
  /** Sublinks — quando presente, o item vira um dropdown em vez de um link direto. */
  children?: readonly NavLink[];
}
