import type * as CounterInterfaces from '@entities/counter/domain/interfaces';
import type { ImplementationLogic } from '@entities/counter/domain/logic';

const BASE_URL = 'http://localhost:3500/counter';

/**
 * Creates a REST API client implementation for the counter entity.
 *
 * @returns The REST API client implementation.
 */
const rest = (): ImplementationLogic.ApiClient => {
  /**
   * Retrieves counters from the server.
   *
   * @returns A promise that resolves to an array of counters.
   */
  const get = async (): Promise<CounterInterfaces.Counter[]> => {
    const httpResponse = await fetch(BASE_URL);

    const data = await httpResponse.json();

    return data;
  };

  /**
   * Updates the counter value on the server.
   *
   * @param value - The new value for the counter.
   * @returns A promise that resolves to the updated value of the counter.
   */
  const update = async (value: number): Promise<number> => {
    const httpResponse = await fetch(`${BASE_URL}/1`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        value,
      }),
    });

    const data = await httpResponse.json();

    return data.value;
  };

  return { get, update };
};

export default rest;
