import { beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { API_CONFIG } from '../../config/api.config';
import { AuthSession } from '../models';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  const session: AuthSession = {
    user: { id: 'u1', name: 'Ana', email: 'ana@pactorh.com.br', roles: ['customer'], createdAt: '2026-01-01T00:00:00.000Z' },
    tokens: { accessToken: 'access-token', refreshToken: 'refresh-token' },
  };

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('começa não autenticado quando não há sessão salva', () => {
    expect(service.isAuthenticated()).toBe(false);
    expect(service.currentUser()).toBeNull();
  });

  it('faz login e salva a sessão retornada pela API', () => {
    let result: AuthSession | undefined;
    service.login({ email: 'ana@pactorh.com.br', password: 'senha12345' }).subscribe((s) => (result = s));

    httpMock.expectOne(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.auth.login}`).flush(session);

    expect(result?.user.email).toBe('ana@pactorh.com.br');
    expect(service.isAuthenticated()).toBe(true);
    expect(service.currentUser()?.email).toBe('ana@pactorh.com.br');
    expect(service.getToken()).toBe('access-token');
  });

  it('propaga o erro quando a API rejeita as credenciais', () => {
    let error: unknown;
    service.login({ email: 'ana@pactorh.com.br', password: 'errada' }).subscribe({ error: (err) => (error = err) });

    httpMock
      .expectOne(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.auth.login}`)
      .flush({ message: 'Credenciais inválidas' }, { status: 401, statusText: 'Unauthorized' });

    expect(error).toBeDefined();
    expect(service.isAuthenticated()).toBe(false);
  });

  it('limpa a sessão ao deslogar e revoga o refresh token na API', () => {
    service.register({ name: 'Ana', email: 'ana@pactorh.com.br', password: 'senha12345' }).subscribe();
    httpMock.expectOne(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.auth.register}`).flush(session);
    expect(service.isAuthenticated()).toBe(true);

    service.logout();

    httpMock.expectOne(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.auth.logout}`).flush(null);

    expect(service.isAuthenticated()).toBe(false);
    expect(service.currentUser()).toBeNull();
    expect(service.getToken()).toBeNull();
  });

  it('não chama a API de logout quando não há sessão (revoke local apenas)', () => {
    service.logout();
    httpMock.expectNone(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.auth.logout}`);
  });

  it('logout({revoke:false}) não chama a API — usado no 401 automático', () => {
    service.register({ name: 'Ana', email: 'ana@pactorh.com.br', password: 'senha12345' }).subscribe();
    httpMock.expectOne(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.auth.register}`).flush(session);

    service.logout({ revoke: false });

    httpMock.expectNone(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.auth.logout}`);
    expect(service.isAuthenticated()).toBe(false);
  });

  it('verifica os papéis (roles) do usuário atual', () => {
    service.register({ name: 'Ana', email: 'ana@pactorh.com.br', password: 'senha12345' }).subscribe();
    httpMock.expectOne(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.auth.register}`).flush(session);

    expect(service.hasRole('customer')).toBe(true);
    expect(service.hasRole('admin')).toBe(false);
  });
});
