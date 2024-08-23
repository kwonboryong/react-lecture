import { create } from 'zustand';

const INITIAL_VALUE = 9;

export const useCounter = create((set) => ({
  count: INITIAL_VALUE,
  increment: (by = 1) => set(({ count }) => ({ count: count + by })),
  decrement: (by = 1) => set(({ count }) => ({ count: count - by })),
  reset: () => set({ count: INITIAL_VALUE }),
}));
