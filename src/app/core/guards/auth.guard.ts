// ============================================================
//  PACTO RH — core/guards/auth.guard.ts
//  Guard de rota: bloqueia acesso a quem não está autenticado,
//  redirecionando para /auth/login.
// ============================================================
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  router.navigate(['/auth/login']);
  return false;
};
