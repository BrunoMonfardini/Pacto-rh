import { Routes } from '@angular/router';
import { guestGuard } from '../../core/guards/guest.guard';

/**
 * Rotas de autenticação — lazy-loaded como um bloco só (ver app.routes.ts).
 * login/register usam guestGuard: usuário já autenticado é redirecionado.
 */
export const authRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
    canActivate: [guestGuard],
    title: 'Entrar — PactoRH',
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then((m) => m.RegisterComponent),
    canActivate: [guestGuard],
    title: 'Criar conta — PactoRH',
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent),
    title: 'Recuperar senha — PactoRH',
  },
  {
    path: 'reset-password',
    loadComponent: () =>
      import('./reset-password/reset-password.component').then((m) => m.ResetPasswordComponent),
    title: 'Redefinir senha — PactoRH',
  },
  {
    path: 'verify-email',
    loadComponent: () => import('./verify-email/verify-email.component').then((m) => m.VerifyEmailComponent),
    title: 'Verificar e-mail — PactoRH',
  },
];
