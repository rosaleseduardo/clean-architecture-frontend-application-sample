import { describe, expect, it } from 'vitest';

import type * as CounterInterfaces from '@entities/counter/domain/interfaces';

import { mockApiClientImplementation } from '../../mocks';

import { getInitialValue } from '.';

describe('Use Case - Get Initial Value', () => {
  let implementation: CounterInterfaces.ResourceImplementations;

  beforeEach(() => {
    implementation = {
      ApiClientImplementation: mockApiClientImplementation(),
    };
  });

  describe('It should receive the expected argument', () => {
    it('An object with the form "ResourceImplementations"', async () => {
      /** Contains the required method to be used within this use case */
      expect(Object.keys(implementation.ApiClientImplementation)).toContain(
        'get',
      );

      /** The property value should be a function */
      expect(implementation.ApiClientImplementation.get).toBeTypeOf('function');
    });
  });

  describe('It should perform the expected application flow', () => {
    it('Gets the count initial value and returns it', async () => {
      const result = await getInitialValue({
        ApiClientImplementation: implementation.ApiClientImplementation,
      });

      expect(result).toStrictEqual({
        fulfilled: true,
        output: {
          id: 1,
          value: 10,
        },
        error: '',
      });
    });
  });
});
