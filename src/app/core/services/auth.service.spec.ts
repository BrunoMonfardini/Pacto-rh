import { beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [provideRouter([])],
    });
    service = TestBed.inject(AuthService);
  });

  it('começa não autenticado quando não há sessão salva', () => {
    expect(service.isAuthenticated()).toBe(false);
    expect(service.currentUser()).toBeNull();
  });

  it('faz login com senha válida e salva a sessão', async () => {
    await new Promise<void>((resolve, reject) => {
      service.login({ email: 'ana@pactorh.com.br', password: '123456' }).subscribe({
        next: (session) => {
          expect(session.user.email).toBe('ana@pactorh.com.br');
          expect(session.tokens.accessToken).toContain('mock-access-');
          resolve();
        },
        error: reject,
      });
    });

    expect(service.isAuthenticated()).toBe(true);
    expect(service.currentUser()?.email).toBe('ana@pactorh.com.br');
    expect(service.getToken()).toContain('mock-access-');
  });

  it('rejeita o login quando a senha é curta demais', async () => {
    await new Promise<void>((resolve) => {
      service.login({ email: 'ana@pactorh.com.br', password: '123' }).subscribe({
        error: (err: Error) => {
          expect(err.message).toBe('E-mail ou senha inválidos.');
          resolve();
        },
      });
    });

    expect(service.isAuthenticated()).toBe(false);
  });

  it('limpa a sessão ao deslogar', async () => {
    await new Promise<void>((resolve) => {
      service.register({ name: 'Ana', email: 'ana@pactorh.com.br', password: '123456' }).subscribe(() => resolve());
    });
    expect(service.isAuthenticated()).toBe(true);

    service.logout();

    expect(service.isAuthenticated()).toBe(false);
    expect(service.currentUser()).toBeNull();
    expect(service.getToken()).toBeNull();
  });

  it('verifica os papéis (roles) do usuário atual', async () => {
    await new Promise<void>((resolve) => {
      service.register({ name: 'Ana', email: 'ana@pactorh.com.br', password: '123456' }).subscribe(() => resolve());
    });

    expect(service.hasRole('customer')).toBe(true);
    expect(service.hasRole('admin')).toBe(false);
  });
});
