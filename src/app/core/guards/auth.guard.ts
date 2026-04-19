// ============================================================
//  PACTO RH — core/guards/auth.guard.ts
//  Descrição: Guard de proteção de rotas
//
//  O que é um guard?
//  É uma função que roda ANTES de uma rota ser carregada.
//  Ela decide: "esse usuário pode acessar essa página?"
//
//  Aqui verificamos se o usuário está logado.
//  Se não estiver, redireciona para a homepage.
// ============================================================
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true; // Usuário logado — pode acessar
  }

  // Não logado — redireciona para home
  // No futuro: redirecionar para /login quando tiver a página
  router.navigate(['/']);
  return false;
};