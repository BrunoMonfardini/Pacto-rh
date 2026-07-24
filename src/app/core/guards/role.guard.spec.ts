import { beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { roleGuard } from './role.guard';
import { AuthService } from '../services/auth.service';

describe('roleGuard', () => {
  let router: Router;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    router = TestBed.inject(Router);
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

  it('bloqueia usuários autenticados sem o papel exigido', async () => {
    const authService = TestBed.inject(AuthService);
    await new Promise<void>((resolve) => {
      authService.register({ name: 'Ana', email: 'ana@pactorh.com.br', password: '123456' }).subscribe(() =>
        resolve()
      );
    });

    // mockRegister sempre atribui a role 'customer'
    expect(runGuard(['admin'])).toBe(false);
  });

  it('permite o acesso quando o usuário tem um dos papéis permitidos', async () => {
    const authService = TestBed.inject(AuthService);
    await new Promise<void>((resolve) => {
      authService.register({ name: 'Ana', email: 'ana@pactorh.com.br', password: '123456' }).subscribe(() =>
        resolve()
      );
    });

    expect(runGuard(['admin', 'customer'])).toBe(true);
  });
});
