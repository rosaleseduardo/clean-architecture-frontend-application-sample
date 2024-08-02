import type * as CoreInterfaces from '@core/domain/interfaces';
import { UseCases } from '@entities/counter/application/use-cases';
import type * as CounterInterfaces from '@entities/counter/domain/interfaces';
import {
  restApiClient,
  //
} from '@entities/counter/infrastructure/implementations';

/**
 * Custom function that provides the view model functions for the counter entity
 *
 * @returns The counter view model functions.
 */
const ViewModel = (): CounterInterfaces.ViewModel => {
  /**
   * Loads the initial counter value.
   *
   * @returns A Promise that resolves with the result of the initial value
   * retrieval.
   */
  const loadInitialState = async (): Promise<
    CoreInterfaces.UseCaseReturn<CounterInterfaces.Counter>
  > =>
    await UseCases.getInitialValue({
      ApiClientImplementation: restApiClient(),
    });

  /**
   * Increments the counter value.

   * 
   *
   * @param count - The current counter value.
   *
   * @returns A Promise that resolves with the result of the increment
   * operation.
   */
  const incrementValue = async (
    count: CounterInterfaces.Counter['value'],
  ): Promise<CoreInterfaces.UseCaseReturn<number>> =>
    await UseCases.incrementValue(count, {
      ApiClientImplementation: restApiClient(),
    });

  /**
   * Decrements the counter value.
   *
   * @param count - The current counter value.
   *
   * @returns A Promise that resolves with the result of the decrement
   * operation.
   */
  const decrementValue = async (
    count: CounterInterfaces.Counter['value'],
  ): Promise<CoreInterfaces.UseCaseReturn<number>> =>
    await UseCases.decrementValue(count, {
      ApiClientImplementation: restApiClient(),
    });

  return {
    loadInitialState,
    incrementValue,
    decrementValue,
  };
};

export default ViewModel;
