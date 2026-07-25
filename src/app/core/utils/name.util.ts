/**
 * Extrai o primeiro nome de um nome completo, ignorando espaços extras.
 * Ex: "Bruno Monfardini de Lima Vieira" → "Bruno".
 */
export function getFirstName(fullName: string | null | undefined): string {
  const trimmed = fullName?.trim() ?? '';
  if (!trimmed) return '';
  return trimmed.split(/\s+/)[0];
}
