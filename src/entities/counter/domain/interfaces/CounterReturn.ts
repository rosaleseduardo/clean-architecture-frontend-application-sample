/**
 * The return type of the `CounterReturn` return and object containing the state
 * and event handlers for the main application component.
 */
export interface CounterReturn {
  /**
   * The current count value.
   */
  count: number;
  /**
   * The current error value.
   */
  error: string;
  /**
   * An event handler function that decrements the count value and updates the
   * state.
   *
   * @returns A promise that resolves when the count value has been updated.
   */
  onDecrementHandler: () => Promise<void>;
  /**
   * An event handler function that increments the count value and updates the
   * state.
   */
  onIncrementHandler: () => Promise<void>;
  /**
   * A function that is called when the component mounts, and loads the initial
   * state.
   *
   * @returns A promise that resolves when the initial state has been loaded.
   */
  onMount: () => Promise<void>;
}
