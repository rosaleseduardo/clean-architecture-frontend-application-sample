import type * as CoreInterfaces from '@core/domain/interfaces';
import type * as CounterInterfaces from '@entities/counter/domain/interfaces';

import type { Counter } from './Counter';

/**
 * Represents the view model for the counter application.
 */
export interface ViewModel {
  /**
   * Loads the initial counter state.
   *
   * @returns A Promise that resolves with the result of the initial state
   * retrieval.
   */
  loadInitialState: () => Promise<
    CoreInterfaces.UseCaseReturn<CounterInterfaces.Counter>
  >;

  /**
   * Increments the counter value.
   *
   * @param count - The current counter value.
   *
   * @returns A Promise that resolves with the result of the increment
   * operation.
   */
  incrementValue: (
    count: Counter['value'],
  ) => Promise<CoreInterfaces.UseCaseReturn<number>>;

  /**
   * Decrements the counter value.
   *
   * @param count - The current counter value.
   *
   * @returns A Promise that resolves with the result of the decrement
   * operation.
   */
  decrementValue: (
    count: Counter['value'],
  ) => Promise<CoreInterfaces.UseCaseReturn<number>>;
}
