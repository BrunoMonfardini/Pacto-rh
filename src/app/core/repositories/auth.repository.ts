import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { API_CONFIG } from '../../config/api.config';
import { AuthSession, AuthTokens, LoginCredentials, MessageResponse, RegisterPayload, User } from '../models';

/**
 * Contrato HTTP real da autenticação — hoje sem backend, por isso
 * AuthService usa um mock em memória (ver core/services/auth.service.ts).
 * Quando a API existir, troque as chamadas do AuthService por este repositório.
 */
@Injectable({ providedIn: 'root' })
export class AuthRepository {
  private readonly api = inject(ApiService);
  private readonly endpoints = API_CONFIG.endpoints.auth;

  login(credentials: LoginCredentials): Observable<AuthSession> {
    return this.api.post<AuthSession>(this.endpoints.login, credentials);
  }

  register(payload: RegisterPayload): Observable<AuthSession> {
    return this.api.post<AuthSession>(this.endpoints.register, payload);
  }

  refresh(refreshToken: string): Observable<AuthTokens> {
    return this.api.post<AuthTokens>(this.endpoints.refresh, { refreshToken });
  }

  logout(): Observable<void> {
    return this.api.post<void>(this.endpoints.logout, {});
  }

  me(): Observable<User> {
    return this.api.get<User>(this.endpoints.me);
  }

  forgotPassword(email: string): Observable<MessageResponse> {
    return this.api.post<MessageResponse>(this.endpoints.forgotPassword, { email });
  }

  resetPassword(token: string, newPassword: string): Observable<MessageResponse> {
    return this.api.post<MessageResponse>(this.endpoints.resetPassword, { token, newPassword });
  }

  verifyEmail(token: string): Observable<MessageResponse> {
    return this.api.post<MessageResponse>(this.endpoints.verifyEmail, { token });
  }
}
