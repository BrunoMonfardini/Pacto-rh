import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { API_CONFIG } from '../../config/api.config';
import { BlogPost } from '../models';
import { Repository } from './repository';

@Injectable({ providedIn: 'root' })
export class BlogRepository implements Repository<BlogPost, string> {
  private readonly api = inject(ApiService);
  private readonly endpoint = API_CONFIG.endpoints.blog;

  getAll(): Observable<BlogPost[]> {
    return this.api.get<BlogPost[]>(this.endpoint);
  }

  getById(id: string): Observable<BlogPost> {
    return this.api.get<BlogPost>(`${this.endpoint}/${id}`);
  }

  getBySlug(slug: string): Observable<BlogPost> {
    return this.api.get<BlogPost>(`${this.endpoint}/slug/${slug}`);
  }
}
