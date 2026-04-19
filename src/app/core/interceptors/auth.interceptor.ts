// ============================================================
//  PACTO RH — core/interceptors/auth.interceptor.ts
//  Descrição: Interceptor de autenticação JWT
//
//  O que é um interceptor?
//  É uma função que "intercepta" toda requisição HTTP que sai
//  da aplicação e pode modificá-la antes de enviar.
//
//  O que fazemos aqui:
//  Se o usuário estiver logado, adicionamos o token JWT no
//  cabeçalho Authorization de todas as requisições
//  automaticamente. Sem isso, teríamos que fazer isso manualmente
//  em cada service.
// ============================================================
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  // Se não tiver token, deixa a requisição passar sem modificar
  if (!token) {
    return next(req);
  }

  // Clona a requisição adicionando o header Authorization
  // (req é imutável no Angular, por isso precisamos clonar)
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(authReq);
};