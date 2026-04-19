// ============================================================
//  PACTO RH — app.config.ts
//  Descrição: Configuração raiz da aplicação Angular 17
//
//  O que fazemos aqui:
//  - Registramos o roteador com animações de transição entre páginas
//  - Habilitamos animações do Angular (para usar @angular/animations)
//  - Registramos o HttpClient para fazer chamadas HTTP nos services
// ============================================================
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // Roteador com:
    // - withViewTransitions: animação nativa de transição entre páginas
    // - withInMemoryScrolling: volta ao topo ao trocar de página
    provideRouter(
      routes,
      withViewTransitions(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),

    // Habilita animações do Angular (@angular/animations)
    provideAnimations(),

    // HttpClient com:
    // - withFetch: usa a Fetch API nativa (mais performática)
    // - withInterceptors: registra o interceptor de autenticação JWT
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor])
    ),
  ],
};