import type * as CoreInterfaces from '@core/domain/interfaces';
import { Adapters } from '@entities/counter/application';
import type * as CounterInterfaces from '@entities/counter/domain/interfaces';

/**
 * Retrieves the initial counter value.
 *
 * @param resourceImplementations - The resource implementations required for
 * the operation.
 *
 * @returns A Promise that resolves with the result of the initial value
 * retrieval.
 */
export const getInitialValue = async ({
  ApiClientImplementation,
}: CounterInterfaces.ResourceImplementations): Promise<
  CoreInterfaces.UseCaseReturn<CounterInterfaces.Counter>
> => {
  try {
    const result = await ApiClientImplementation.get();

    const adaptedResult = Adapters.initialValue(result);

    return {
      fulfilled: true,
      output: adaptedResult,
      error: '',
    };
  } catch (error) {
    return {
      fulfilled: false,
      output: { id: 0, value: 0 },
      error: `There was an error when getting the initial value. Details: ${
        error as string
      }`,
    };
  }
};
