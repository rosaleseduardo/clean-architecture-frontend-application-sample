import { vitest } from 'vitest';

import type * as CounterInterfaces from '@entities/counter/domain/interfaces';

export const mockUseViewModelApp: CounterInterfaces.CounterReturn = {
  count: 0,
  error: '',
  onDecrementHandler: vitest.fn(),
  onIncrementHandler: vitest.fn(),
  onMount: vitest.fn(),
};
