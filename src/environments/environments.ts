// ============================================================
//  PACTO RH — src/environments/environment.ts
//  Descrição: Variáveis de ambiente para DESENVOLVIMENTO
//
//  Como usar nos services:
//  import { environment } from '../../environments/environment';
//  this.http.get(`${environment.apiUrl}/posts`)
// ============================================================
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  siteUrl: 'http://localhost:4200',
};