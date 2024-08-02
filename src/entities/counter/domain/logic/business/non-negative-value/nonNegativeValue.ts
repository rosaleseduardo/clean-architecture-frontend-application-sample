import type * as CounterInterfaces from '@entities/counter/domain/interfaces';

/**
 * Checks if the given counter value is non-negative.
 *
 * @param count - The counter value to check.
 *
 * @returns A boolean indicating whether the counter value is non-negative.
 */
export const NonNegativeValue = (
  count: CounterInterfaces.Counter['value'],
): boolean => {
  return count >= 0;
};
