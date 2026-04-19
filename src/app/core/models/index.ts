// ============================================================
//  PACTO RH — core/models/index.ts
//  Descrição: Todas as interfaces TypeScript do projeto
//
//  O que são interfaces TypeScript?
//  São "moldes" que definem a forma de um objeto.
//  Ex: toda vez que usarmos um BlogPost, ele DEVE ter
//  id, title, slug, etc. O TypeScript avisa se faltar algo.
// ============================================================

// ------------------------------------------------------------
//  BLOG
// ------------------------------------------------------------
export interface BlogPost {
  id: number;
  title: string;
  slug: string;           // URL amigável: "como-liderar-equipes"
  excerpt: string;        // Resumo curto para listagem
  content: string;        // HTML completo do post
  coverImage: string;     // URL da imagem de capa
  category: BlogCategory;
  author: Author;
  publishedAt: string;    // ISO date string
  readingTime: number;    // minutos de leitura estimados
  tags: string[];
}

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  color: string;          // cor hex para o badge
}

export interface Author {
  id: number;
  name: string;
  bio: string;
  avatar: string;
  role: string;
}

// ------------------------------------------------------------
//  PRODUTOS / E-BOOKS
// ------------------------------------------------------------
export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  coverImage: string;
  price: number;          // em centavos (ex: 4700 = R$ 47,00)
  originalPrice?: number; // preço original para mostrar desconto
  type: 'ebook' | 'course' | 'mentoring';
  pages?: number;         // para e-books
  hours?: number;         // para cursos
  topics: string[];       // lista de tópicos abordados
  benefits: string[];     // benefícios do produto
  featured: boolean;
}

// ------------------------------------------------------------
//  SERVIÇOS DA EMPRESA
// ------------------------------------------------------------
export interface Service {
  id: number;
  icon: string;           // classe do Font Awesome (ex: "fa-users")
  title: string;
  shortDescription: string;
  longDescription: string;
  slug: string;
  benefits: string[];
  targetAudience: string;
  featured: boolean;
}

// ------------------------------------------------------------
//  DEPOIMENTOS
// ------------------------------------------------------------
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar?: string;        // URL da foto (opcional — usa iniciais se não tiver)
  rating: number;         // 1 a 5
}

// ------------------------------------------------------------
//  FORMULÁRIO DE CONTATO
// ------------------------------------------------------------
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  company?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

// ------------------------------------------------------------
//  TREINAMENTOS
// ------------------------------------------------------------
export interface Training {
  id: number;
  title: string;
  slug: string;
  description: string;
  duration: string;       // ex: "8 horas", "2 dias"
  modality: 'presencial' | 'online' | 'hibrido';
  targetAudience: string;
  topics: string[];
  coverImage: string;
  featured: boolean;
}

// ------------------------------------------------------------
//  UTILITÁRIOS DE API
// ------------------------------------------------------------

// Resposta paginada — para listas com muitos itens
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

// Resposta genérica da API
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}