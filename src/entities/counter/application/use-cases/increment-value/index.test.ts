import { describe, expect, it } from 'vitest';

import type * as CounterInterfaces from '@entities/counter/domain/interfaces';

import { mockApiClientImplementation } from '../../mocks';

import { incrementValue } from '.';

describe('Use Case - Increment Value', () => {
  let implementation: CounterInterfaces.ResourceImplementations;
  let count: number;

  beforeEach(() => {
    count = 10;
    implementation = {
      ApiClientImplementation: mockApiClientImplementation(),
    };
  });

  describe('It should receive the expected arguments', () => {
    it('Fist one should be a number', () => {
      expect(count).toBeTypeOf('number');
    });

    it('Second one should be an object with a specific form', async () => {
      /** Contains the required method to be used within this use case */
      expect(Object.keys(implementation.ApiClientImplementation)).toContain(
        'update',
      );

      /** The property value should be a function */
      expect(implementation.ApiClientImplementation.update).toBeTypeOf(
        'function',
      );
    });
  });

  describe('It should perform the expected application flow', () => {
    it('Increments the count and returns the new value', async () => {
      const result = await incrementValue(count + 1, {
        ApiClientImplementation: implementation.ApiClientImplementation,
      });

      expect(result).toStrictEqual({
        error: '',
        fulfilled: true,
        output: 12,
      });
    });
  });
});
