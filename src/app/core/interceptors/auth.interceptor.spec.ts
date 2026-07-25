import { beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Router, provideRouter } from '@angular/router';
import { authInterceptor } from './auth.interceptor';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';

describe('authInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let tokenService: TokenService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting(),
      ],
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    tokenService = TestBed.inject(TokenService);
  });

  it('não adiciona o header Authorization quando não há token', () => {
    http.get('/api/ping').subscribe();

    const req = httpMock.expectOne('/api/ping');
    expect(req.request.headers.has('Authorization')).toBe(false);
    req.flush({});
  });

  it('adiciona o Bearer token quando existe uma sessão', () => {
    tokenService.setTokens({ accessToken: 'abc123', refreshToken: 'def456' });

    http.get('/api/ping').subscribe();

    const req = httpMock.expectOne('/api/ping');
    expect(req.request.headers.get('Authorization')).toBe('Bearer abc123');
    req.flush({});
  });

  it('desloga o usuário quando a resposta é 401 com um token expirado anexado', () => {
    tokenService.setTokens({ accessToken: 'expired', refreshToken: 'def456' });
    const authService = TestBed.inject(AuthService);

    http.get('/api/ping').subscribe({ error: () => {} });

    const req = httpMock.expectOne('/api/ping');
    req.flush({ message: 'Unauthorized' }, { status: 401, statusText: 'Unauthorized' });

    expect(authService.isAuthenticated()).toBe(false);
    expect(tokenService.getAccessToken()).toBeNull();
  });

  it('não desloga em um 401 sem token — ex: senha errada no login', () => {
    // Sem sessão: authService.logout() navegaria para home, o que atrapalharia
    // o formulário de login (que já trata esse erro sozinho).
    const authService = TestBed.inject(AuthService);
    const navigateSpy = vi.spyOn(TestBed.inject(Router), 'navigate');

    http.post('/auth/login', { email: 'a@a.com', password: 'errada' }).subscribe({ error: () => {} });

    const req = httpMock.expectOne('/auth/login');
    req.flush({ message: 'Credenciais inválidas' }, { status: 401, statusText: 'Unauthorized' });

    expect(navigateSpy).not.toHaveBeenCalled();
    expect(authService.isAuthenticated()).toBe(false);
  });
});
