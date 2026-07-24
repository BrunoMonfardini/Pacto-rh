// ============================================================
//  core/guards/role.guard.ts
//  Guard de permissões: só libera a rota se o usuário autenticado
//  tiver um dos papéis (roles) informados.
//  Uso: { path: 'admin', canActivate: [roleGuard(['admin'])], ... }
// ============================================================
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Role } from '../models';
import { ROUTES } from '../../shared/constants/routes.constants';

export const roleGuard = (allowedRoles: Role[]): CanActivateFn => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.isAuthenticated()) {
      router.navigate(['/auth/login']);
      return false;
    }

    if (allowedRoles.some((role) => authService.hasRole(role))) {
      return true;
    }

    router.navigate([ROUTES.home]);
    return false;
  };
};
