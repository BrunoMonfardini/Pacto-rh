import { environment } from '@env/environments';

/**
 * Endpoints centralizados da API. Nenhum service deve concatenar
 * strings de URL manualmente — sempre importar daqui.
 */
export const API_CONFIG = {
  baseUrl: environment.apiUrl,
  endpoints: {
    blog: '/blog',
    products: '/products',
    contact: '/contact',
    orders: '/orders',
    auth: {
      login: '/auth/login',
      register: '/auth/register',
      refresh: '/auth/refresh',
      logout: '/auth/logout',
      me: '/auth/me',
      forgotPassword: '/auth/forgot-password',
      resetPassword: '/auth/reset-password',
      verifyEmail: '/auth/verify-email',
    },
  },
} as const;
