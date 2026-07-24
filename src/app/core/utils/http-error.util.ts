import { HttpErrorResponse } from '@angular/common/http';

/**
 * Extrai uma mensagem exibível de um erro HTTP. A API (class-validator/Nest)
 * retorna `{ message: string }` para erros de negócio e `{ message: string[] }`
 * quando múltiplos campos falham na validação — aqui tratamos os dois formatos.
 */
export function extractErrorMessage(err: unknown, fallback: string): string {
  if (err instanceof HttpErrorResponse) {
    const body = err.error as { message?: string | string[] } | null;
    if (Array.isArray(body?.message)) return body.message.join(' ');
    if (typeof body?.message === 'string') return body.message;
  }
  return fallback;
}
