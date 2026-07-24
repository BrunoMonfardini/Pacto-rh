import { beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { authGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { API_CONFIG } from '../../config/api.config';

describe('authGuard', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    });
    httpMock = TestBed.inject(HttpTestingController);
  });

  function runGuard() {
    return TestBed.runInInjectionContext(() => authGuard({} as never, {} as never));
  }

  it('bloqueia e redireciona para /auth/login quando não autenticado', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    const result = runGuard();

    expect(result).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/auth/login']);
  });

  it('permite o acesso quando autenticado', () => {
    const authService = TestBed.inject(AuthService);
    authService.register({ name: 'Ana', email: 'ana@pactorh.com.br', password: 'senha12345' }).subscribe();
    httpMock.expectOne(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.auth.register}`).flush({
      user: { id: 'u1', name: 'Ana', email: 'ana@pactorh.com.br', roles: ['customer'], createdAt: '2026-01-01T00:00:00.000Z' },
      tokens: { accessToken: 'access-token', refreshToken: 'refresh-token' },
    });

    expect(runGuard()).toBe(true);
  });
});
