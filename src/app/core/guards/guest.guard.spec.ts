import { beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { guestGuard } from './guest.guard';
import { AuthService } from '../services/auth.service';

describe('guestGuard', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  function runGuard() {
    return TestBed.runInInjectionContext(() => guestGuard({} as never, {} as never));
  }

  it('permite o acesso quando não há sessão', () => {
    expect(runGuard()).toBe(true);
  });

  it('bloqueia e redireciona para a home quando já autenticado', async () => {
    const authService = TestBed.inject(AuthService);
    await new Promise<void>((resolve) => {
      authService.register({ name: 'Ana', email: 'ana@pactorh.com.br', password: '123456' }).subscribe(() =>
        resolve()
      );
    });

    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    expect(runGuard()).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });
});
