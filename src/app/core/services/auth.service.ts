import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';
import { TokenService } from './token.service';
import { AuthRepository } from '../repositories/auth.repository';
import { STORAGE_KEYS } from '../../config/storage.config';
import { ROUTES } from '../../shared/constants/routes.constants';
import { AuthSession, LoginCredentials, MessageResponse, RegisterPayload, Role, User } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly authRepository = inject(AuthRepository);
  private readonly tokenService = inject(TokenService);
  private readonly router = inject(Router);

  private readonly _currentUser = signal<User | null>(this.restoreUser());
  readonly currentUser = this._currentUser.asReadonly();
  readonly isAuthenticated = computed(() => this._currentUser() !== null);

  login(credentials: LoginCredentials): Observable<AuthSession> {
    return this.authRepository.login(credentials).pipe(tap((session) => this.setSession(session)));
  }

  register(payload: RegisterPayload): Observable<AuthSession> {
    return this.authRepository.register(payload).pipe(tap((session) => this.setSession(session)));
  }

  /**
   * @param options.revoke `false` pula a chamada a `POST /auth/logout` — usado pelo
   * authInterceptor no deslogamento automático por 401, para não repetir uma chamada
   * que falharia com o mesmo 401 (o token que expirou é o mesmo que autorizaria a revogação).
   */
  logout(options: { revoke?: boolean } = {}): void {
    const token = this.tokenService.getAccessToken();
    if (options.revoke !== false && token) {
      this.authRepository.logout().pipe(catchError(() => of(undefined))).subscribe();
    }

    this.tokenService.clear();
    localStorage.removeItem(STORAGE_KEYS.user);
    this._currentUser.set(null);
    this.router.navigate([ROUTES.home]);
  }

  forgotPassword(email: string): Observable<MessageResponse> {
    return this.authRepository.forgotPassword(email);
  }

  resetPassword(token: string, newPassword: string): Observable<MessageResponse> {
    return this.authRepository.resetPassword(token, newPassword);
  }

  verifyEmail(token: string): Observable<MessageResponse> {
    return this.authRepository.verifyEmail(token);
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
}
