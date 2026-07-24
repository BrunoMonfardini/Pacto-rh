import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '../../config/storage.config';
import { AuthTokens } from '../models';

/** Isola o acesso a localStorage — troque a implementação aqui se mudar a estratégia de sessão. */
@Injectable({ providedIn: 'root' })
export class TokenService {
  getAccessToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.accessToken);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.refreshToken);
  }

  setTokens(tokens: AuthTokens): void {
    localStorage.setItem(STORAGE_KEYS.accessToken, tokens.accessToken);
    localStorage.setItem(STORAGE_KEYS.refreshToken, tokens.refreshToken);
  }

  clear(): void {
    localStorage.removeItem(STORAGE_KEYS.accessToken);
    localStorage.removeItem(STORAGE_KEYS.refreshToken);
  }

  hasSession(): boolean {
    return !!this.getAccessToken();
  }
}
