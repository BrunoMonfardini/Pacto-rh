import { Observable } from 'rxjs';

/**
 * Contrato mínimo de um repositório — abstrai a fonte de dados (hoje HTTP,
 * podendo futuramente ser trocada sem afetar quem consome o repositório).
 */
export interface Repository<T, TId = number | string> {
  getAll(): Observable<T[]>;
  getById(id: TId): Observable<T>;
}
