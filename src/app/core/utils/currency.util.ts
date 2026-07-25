/**
 * Formata um preço em centavos (formato do backend, ex: 4700) como
 * "R$ 47,00". Evita depender do CurrencyPipe do Angular, que exige
 * registrar os dados de locale pt-BR (não configurados neste projeto).
 */
export function formatPriceBRL(cents: number): string {
  return `R$ ${(cents / 100).toFixed(2).replace('.', ',')}`;
}
