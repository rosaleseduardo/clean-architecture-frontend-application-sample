import { vitest } from 'vitest';

interface CounterViewModel {
  loadInitialState: () => Promise<number>;
  incrementValue: (count: number) => Promise<number>;
  decrementValue: (count: number) => Promise<number>;
}

export const mockUseCounterViewModel = (): CounterViewModel => ({
  loadInitialState: vitest.fn(async () => await Promise.resolve(0)),
  incrementValue: vitest.fn(
    async (count: number) => await Promise.resolve(count + 1),
  ),
  decrementValue: vitest.fn(
    async (count: number) => await Promise.resolve(count - 1),
  ),
});
