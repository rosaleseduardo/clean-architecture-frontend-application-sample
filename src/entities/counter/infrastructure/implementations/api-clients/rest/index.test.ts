import { describe, expect, it, vitest } from 'vitest';

import type * as CounterInterfaces from '@entities/counter/domain/interfaces';
import type { ImplementationLogic } from '@entities/counter/domain/logic';

import { restApiClient } from '.';

const generateMockResponse = async <T>(
  mockResponse: T,
): Promise<{ json: () => Promise<T> }> =>
  await Promise.resolve({
    json: async () => await Promise.resolve(mockResponse),
  });

const apiService: ImplementationLogic.ApiClient = restApiClient();

describe('Rest API Client', () => {
  afterEach(() => {
    vitest.resetAllMocks();
  });

  describe('GET Method', () => {
    const mockResponse: CounterInterfaces.Counter = {
      id: 1,
      value: 10,
    };

    beforeEach(() => {
      // eslint-disable-next-line no-undef
      global.fetch = vitest
        .fn()
        .mockImplementation(
          async () => await generateMockResponse(mockResponse),
        );
    });

    it('It should call the fetch API with the correct parameters', async () => {
      await apiService.get();

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith('http://localhost:3500/counter');
    });

    it('It should return the remote data source', async () => {
      const response = await apiService.get();

      expect(response).toStrictEqual<CounterInterfaces.Counter>(mockResponse);
    });
  });

  describe('UPDATE Method', () => {
    beforeEach(() => {
      // eslint-disable-next-line no-undef
      global.fetch = vitest
        .fn()
        .mockImplementation(
          async () => await generateMockResponse({ value: 2 }),
        );
    });

    it('It should call the fetch API with the correct parameters', async () => {
      await apiService.update(1);

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith('http://localhost:3500/counter/1', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ value: 1 }),
      });
    });

    it('It should return the updated value', async () => {
      const result = await apiService.update(1);

      expect(result).toBe<number>(2);
    });
  });
});
