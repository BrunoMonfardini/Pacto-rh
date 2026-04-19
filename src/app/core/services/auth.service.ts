// ============================================================
//  PACTO RH — core/services/auth.service.ts
//  Descrição: Service de autenticação
//
//  Por enquanto temos a estrutura base.
//  Quando tiver um backend real, integramos aqui.
// ============================================================
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'pacto_rh_token';
  private readonly apiUrl = environment.apiUrl;

  // Signal reativo — componentes podem observar o estado de login
  isAuthenticated = signal<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) {}

  // Verifica se existe token salvo
  isLoggedIn(): boolean {
    return this.hasToken();
  }

  // Retorna o token salvo (ou null)
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Salva o token e atualiza o signal
  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.isAuthenticated.set(true);
  }

  // Remove o token (logout)
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.isAuthenticated.set(false);
    this.router.navigate(['/']);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}