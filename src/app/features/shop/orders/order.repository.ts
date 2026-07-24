import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { API_CONFIG } from '../../../config/api.config';
import { Repository } from '../../../core/repositories/repository';
import { Order } from './order.model';

/** Sem backend ainda — repositório pronto para quando os pedidos forem implementados. */
@Injectable({ providedIn: 'root' })
export class OrderRepository implements Repository<Order, string> {
  private readonly api = inject(ApiService);
  private readonly endpoint = API_CONFIG.endpoints.orders;

  getAll(): Observable<Order[]> {
    return this.api.get<Order[]>(this.endpoint);
  }

  getById(id: string): Observable<Order> {
    return this.api.get<Order>(`${this.endpoint}/${id}`);
  }

  create(order: Omit<Order, 'id' | 'createdAt' | 'status'>): Observable<Order> {
    return this.api.post<Order>(this.endpoint, order);
  }
}
