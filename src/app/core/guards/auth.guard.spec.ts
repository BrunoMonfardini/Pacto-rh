import { beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { authGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';

describe('authGuard', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
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

  it('permite o acesso quando autenticado', async () => {
    const authService = TestBed.inject(AuthService);
    await new Promise<void>((resolve) => {
      authService.register({ name: 'Ana', email: 'ana@pactorh.com.br', password: '123456' }).subscribe(() =>
        resolve()
      );
    });

    expect(runGuard()).toBe(true);
  });
});
