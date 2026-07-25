import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';
import { PRODUCTS_MOCK } from './products.mock';

/**
 * Fonte de dados dos produtos da Loja. Hoje serve o catálogo mockado de
 * products.mock.ts; a troca futura por uma API real não muda a interface
 * pública deste serviço, só a implementação interna.
 */
@Injectable({ providedIn: 'root' })
export class ProductService {
  getAll(): Observable<Product[]> {
    return of(PRODUCTS_MOCK);
  }

  getBySlug(slug: string): Observable<Product | undefined> {
    return of(PRODUCTS_MOCK.find((product) => product.slug === slug));
  }
}
