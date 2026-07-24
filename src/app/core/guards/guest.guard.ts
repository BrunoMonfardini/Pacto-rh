// ============================================================
//  core/guards/guest.guard.ts
//  Guard inverso: impede que um usuário já autenticado acesse
//  páginas como /auth/login ou /auth/register.
// ============================================================
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ROUTES } from '../../shared/constants/routes.constants';

export const guestGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    return true;
  }

  router.navigate([ROUTES.home]);
  return false;
};
