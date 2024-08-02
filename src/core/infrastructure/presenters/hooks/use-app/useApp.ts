import { useState } from 'react';

import type * as CounterInterfaces from '@entities/counter/domain/interfaces';
import { ViewModel } from '@entities/counter/infrastructure/presenters';

/**
 * Custom hook that manages the state and functionality related to the counter
 * entity.
 *
 * @returns The counter state and functions.
 */
export const useApp = (): CounterInterfaces.CounterReturn => {
  const { loadInitialState, incrementValue, decrementValue } = ViewModel();
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<string>('');

  /**
   * Initializes the counter state by loading the initial value from the entity.
   *
   * @returns A Promise that resolves when the counter state is initialized.
   */
  const onMount = async (): Promise<void> => {
    const { error, output } = await loadInitialState();

    setCount(output.value);
    setError(error);
  };

  /**
   * Handles the increment operation on the counter value.
   *
   * @returns A Promise that resolves when the increment operation is completed.
   */
  const onIncrementHandler = async (): Promise<void> => {
    const { error, output } = await incrementValue(count);

    setCount(output);
    setError(error);
  };

  /**
   * Handles the decrement operation on the counter value.
   *
   * @returns A Promise that resolves when the decrement operation is completed.
   */
  const onDecrementHandler = async (): Promise<void> => {
    const { error, output } = await decrementValue(count);

    setCount(output);
    setError(error);
  };

  return {
    count,
    error,
    onDecrementHandler,
    onIncrementHandler,
    onMount,
  };
};
