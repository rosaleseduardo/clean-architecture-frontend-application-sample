import type * as CoreInterfaces from '@core/domain/interfaces';
import type * as CounterInterfaces from '@entities/counter/domain/interfaces';
import { BusinessLogic } from '@entities/counter/domain/logic';

/**
 * Decrements the counter value.
 *
 * @param count - The current counter value.
 *
 * @param resourceImplementations - The resource implementations required for
 * the operation.
 *
 * @returns A Promise that resolves with the result of the decrement operation.
 */
export const decrementValue = async (
  count: CounterInterfaces.Counter['value'],
  { ApiClientImplementation }: CounterInterfaces.ResourceImplementations,
): Promise<CoreInterfaces.UseCaseReturn<number>> => {
  try {
    const updatedValue = count - 1;

    const bizRulePassed = BusinessLogic.NonNegativeValue(updatedValue);

    if (bizRulePassed) await ApiClientImplementation.update(updatedValue);

    return {
      fulfilled: bizRulePassed,
      output: !bizRulePassed ? 0 : updatedValue,
      error: !bizRulePassed ? 'Counter must not be less than 0' : '',
    };
  } catch (error) {
    return {
      fulfilled: false,
      output: 0,
      error: `There was an error when decrementing the value. Details: ${
        error as string
      }`,
    };
  }
};
