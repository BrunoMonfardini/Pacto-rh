import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { API_CONFIG } from '../../config/api.config';
import { ContactForm, ContactResponse } from '../models';

@Injectable({ providedIn: 'root' })
export class ContactRepository {
  private readonly api = inject(ApiService);
  private readonly endpoint = API_CONFIG.endpoints.contact;

  send(form: ContactForm): Observable<ContactResponse> {
    return this.api.post<ContactResponse>(this.endpoint, form);
  }
}
