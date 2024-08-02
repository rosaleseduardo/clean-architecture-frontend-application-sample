/**
 * Represents the return type of a use case.
 *
 * @typeparam T - The type of the output value.
 */
export interface UseCaseReturn<T> {
  /**
   * Indicates whether the use case execution is fulfilled or not.
   */
  fulfilled: boolean;
  /**
   * The output value of the use case.
   */
  output: T;
  /**
   * The error message, if any, encountered during the use case execution.
   */
  error: string;
}
