import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, of, tap, throwError } from 'rxjs';
import { TokenService } from './token.service';
import { STORAGE_KEYS } from '../../config/storage.config';
import { ROUTES } from '../../shared/constants/routes.constants';
import { AuthSession, LoginCredentials, MessageResponse, RegisterPayload, Role, User } from '../models';

/**
 * MOCK — não há backend real ainda. Toda a lógica abaixo roda em memória
 * (delay simulando latência de rede) para deixar os fluxos de login/registro
 * demonstráveis. Quando existir uma API, troque os métodos privados
 * `mock*` por chamadas ao core/repositories/auth.repository.ts.
 */
const MOCK_DELAY_MS = 400;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenService = inject(TokenService);
  private readonly router = inject(Router);

  private readonly _currentUser = signal<User | null>(this.restoreUser());
  readonly currentUser = this._currentUser.asReadonly();
  readonly isAuthenticated = computed(() => this._currentUser() !== null);

  login(credentials: LoginCredentials): Observable<AuthSession> {
    return this.mockLogin(credentials).pipe(tap((session) => this.setSession(session)));
  }

  register(payload: RegisterPayload): Observable<AuthSession> {
    return this.mockRegister(payload).pipe(tap((session) => this.setSession(session)));
  }

  logout(): void {
    this.tokenService.clear();
    localStorage.removeItem(STORAGE_KEYS.user);
    this._currentUser.set(null);
    this.router.navigate([ROUTES.home]);
  }

  forgotPassword(email: string): Observable<MessageResponse> {
    return of({ message: `Se ${email} existir em nossa base, um link de recuperação foi enviado.` }).pipe(
      delay(MOCK_DELAY_MS)
    );
  }

  resetPassword(_token: string, _newPassword: string): Observable<MessageResponse> {
    return of({ message: 'Senha redefinida com sucesso.' }).pipe(delay(MOCK_DELAY_MS));
  }

  verifyEmail(_token: string): Observable<MessageResponse> {
    return of({ message: 'E-mail verificado com sucesso.' }).pipe(delay(MOCK_DELAY_MS));
  }

  hasRole(role: Role): boolean {
    return this._currentUser()?.roles.includes(role) ?? false;
  }

  /** @deprecated use isAuthenticated() */
  isLoggedIn(): boolean {
    return this.isAuthenticated();
  }

  getToken(): string | null {
    return this.tokenService.getAccessToken();
  }

  private setSession(session: AuthSession): void {
    this.tokenService.setTokens(session.tokens);
    localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(session.user));
    this._currentUser.set(session.user);
  }

  private restoreUser(): User | null {
    if (!this.tokenService.hasSession()) return null;
    const raw = localStorage.getItem(STORAGE_KEYS.user);
    return raw ? (JSON.parse(raw) as User) : null;
  }

  // --- Mocks (substituir por AuthRepository quando a API existir) ---

  private mockLogin(credentials: LoginCredentials): Observable<AuthSession> {
    if (credentials.password.length < 6) {
      return throwError(() => new Error('E-mail ou senha inválidos.')).pipe(delay(MOCK_DELAY_MS));
    }
    return of(this.buildMockSession(credentials.email, credentials.email.split('@')[0])).pipe(
      delay(MOCK_DELAY_MS)
    );
  }

  private mockRegister(payload: RegisterPayload): Observable<AuthSession> {
    return of(this.buildMockSession(payload.email, payload.name)).pipe(delay(MOCK_DELAY_MS));
  }

  private buildMockSession(email: string, name: string): AuthSession {
    return {
      user: {
        id: crypto.randomUUID(),
        name,
        email,
        roles: ['customer'],
        createdAt: new Date().toISOString(),
      },
      tokens: {
        accessToken: `mock-access-${crypto.randomUUID()}`,
        refreshToken: `mock-refresh-${crypto.randomUUID()}`,
      },
    };
  }
}
