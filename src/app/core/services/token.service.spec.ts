import { beforeEach, describe, expect, it } from 'vitest';
import { TokenService } from './token.service';
import { STORAGE_KEYS } from '../../config/storage.config';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    localStorage.clear();
    service = new TokenService();
  });

  it('retorna null quando não há sessão', () => {
    expect(service.getAccessToken()).toBeNull();
    expect(service.hasSession()).toBe(false);
  });

  it('salva e lê os tokens', () => {
    service.setTokens({ accessToken: 'abc', refreshToken: 'def' });

    expect(service.getAccessToken()).toBe('abc');
    expect(service.getRefreshToken()).toBe('def');
    expect(service.hasSession()).toBe(true);
    expect(localStorage.getItem(STORAGE_KEYS.accessToken)).toBe('abc');
  });

  it('limpa os dois tokens', () => {
    service.setTokens({ accessToken: 'abc', refreshToken: 'def' });
    service.clear();

    expect(service.getAccessToken()).toBeNull();
    expect(service.getRefreshToken()).toBeNull();
  });
});
