export type ProductCategory = 'Curso' | 'E-book' | 'Mentoria' | 'Workshop';

/**
 * Produto do catálogo da Loja PactoRH. Estrutura desacoplada de qualquer
 * fonte de dados — hoje vem de products.mock.ts, no futuro pode vir de uma
 * API/BD sem mudar quem consome o ProductService.
 */
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  /** Classe do ícone Font Awesome usada como imagem placeholder do produto. */
  icon: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  targetAudience: string;
  featured?: boolean;
}
