// Produtos já são modelados em core/models e core/repositories/product.repository.ts
// (reaproveitados também pela seção /profissional de e-books). Este barrel só
// existe para permitir `import { Product, ProductRepository } from '@features/shop/products'`
// a partir de código específico da loja.
export type { Product } from '../../../core/models';
export { ProductRepository } from '../../../core/repositories/product.repository';
