import { describe, expect, it } from 'vitest';
import { getFirstName } from './name.util';

describe('getFirstName', () => {
  it('retorna apenas o primeiro nome quando há múltiplos sobrenomes', () => {
    expect(getFirstName('Bruno Monfardini de Lima Vieira')).toBe('Bruno');
  });

  it('retorna o primeiro nome quando há apenas dois nomes', () => {
    expect(getFirstName('Maria Clara Souza')).toBe('Maria');
    expect(getFirstName('João Pedro Silva')).toBe('João');
  });

  it('retorna o próprio nome quando não há sobrenome', () => {
    expect(getFirstName('Ana')).toBe('Ana');
  });

  it('ignora espaços extras entre e ao redor das palavras', () => {
    expect(getFirstName('   Bruno   Vieira  ')).toBe('Bruno');
  });

  it('retorna string vazia para entradas vazias, nulas ou indefinidas', () => {
    expect(getFirstName('')).toBe('');
    expect(getFirstName('   ')).toBe('');
    expect(getFirstName(null)).toBe('');
    expect(getFirstName(undefined)).toBe('');
  });
});
