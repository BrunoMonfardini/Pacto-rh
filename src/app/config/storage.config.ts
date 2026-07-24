/** Chaves usadas em localStorage/sessionStorage — centralizadas para evitar strings soltas. */
export const STORAGE_KEYS = {
  accessToken: 'pacto_rh_access_token',
  refreshToken: 'pacto_rh_refresh_token',
  user: 'pacto_rh_user',
} as const;
