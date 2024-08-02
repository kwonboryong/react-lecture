import { it, expect } from 'vitest';
import sum from './sum';

it('sum(2, 4, 6, 8, 12, 101) = 133', () => {
  const total = sum(2, 4, 6, 8, 12, 101);
  expect(total).toBe(133);
});
