import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { API_CONFIG } from '../../config/api.config';
import { Product } from '../models';
import { Repository } from './repository';

@Injectable({ providedIn: 'root' })
export class ProductRepository implements Repository<Product, string> {
  private readonly api = inject(ApiService);
  private readonly endpoint = API_CONFIG.endpoints.products;

  getAll(): Observable<Product[]> {
    return this.api.get<Product[]>(this.endpoint);
  }

  getById(id: string): Observable<Product> {
    return this.api.get<Product>(`${this.endpoint}/${id}`);
  }

  getBySlug(slug: string): Observable<Product> {
    return this.api.get<Product>(`${this.endpoint}/slug/${slug}`);
  }
}
