import { beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { API_CONFIG } from '../../config/api.config';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('prefixa requisições GET com a baseUrl configurada', () => {
    service.get('/blog').subscribe();

    const req = httpMock.expectOne(`${API_CONFIG.baseUrl}/blog`);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('envia o corpo do POST para o endpoint correto', () => {
    const body = { name: 'Ana' };
    service.post('/contact', body).subscribe();

    const req = httpMock.expectOne(`${API_CONFIG.baseUrl}/contact`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(body);
    req.flush({ success: true });
  });
});
