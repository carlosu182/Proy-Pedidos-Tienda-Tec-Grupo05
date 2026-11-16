import { describe, it, expect } from 'vitest';

describe('Demostración de CI fallido', () => {
  it('debe mostrar un fallo intencional', () => {
    expect(true).toBe(true);
  });
});
