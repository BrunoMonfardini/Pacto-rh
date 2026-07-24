import { beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { roleGuard } from './role.guard';
import { AuthService } from '../services/auth.service';
import { API_CONFIG } from '../../config/api.config';

describe('roleGuard', () => {
  let router: Router;
  let httpMock: HttpTestingController;

  function registerAsCustomer() {
    const authService = TestBed.inject(AuthService);
    authService.register({ name: 'Ana', email: 'ana@pactorh.com.br', password: 'senha12345' }).subscribe();
    httpMock.expectOne(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.auth.register}`).flush({
      user: { id: 'u1', name: 'Ana', email: 'ana@pactorh.com.br', roles: ['customer'], createdAt: '2026-01-01T00:00:00.000Z' },
      tokens: { accessToken: 'access-token', refreshToken: 'refresh-token' },
    });
  }

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    });
    router = TestBed.inject(Router);
    httpMock = TestBed.inject(HttpTestingController);
    // Guards de unidade não precisam navegar de verdade — só decidir.
    vi.spyOn(router, 'navigate').mockResolvedValue(true);
  });

  function runGuard(allowed: Parameters<typeof roleGuard>[0]) {
    const guard = roleGuard(allowed);
    return TestBed.runInInjectionContext(() => guard({} as never, {} as never));
  }

  it('bloqueia usuários não autenticados', () => {
    expect(runGuard(['admin'])).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
  });

  it('bloqueia usuários autenticados sem o papel exigido', () => {
    registerAsCustomer();

    expect(runGuard(['admin'])).toBe(false);
  });

  it('permite o acesso quando o usuário tem um dos papéis permitidos', () => {
    registerAsCustomer();

    expect(runGuard(['admin', 'customer'])).toBe(true);
  });
});
