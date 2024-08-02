import { describe, expect, it } from 'vitest';

import type * as CounterInterfaces from '@entities/counter/domain/interfaces';
import {
  cleanup,
  renderHook,
  type RenderHookResult,
} from '@testing-library/react-hooks';

import { mockUseCounterViewModel } from './mocks';

const performRender = (): RenderHookResult<void, CounterInterfaces.ViewModel> =>
  renderHook(() => mockUseCounterViewModel());

describe('Counter - View Model', () => {
  afterEach(() => {
    /**
     * Unmounts React trees that were mounted in render
     *
     * This 'void' keyword was included to comply with this rule
     * {@link https://typescript-eslint.io/rules/no-floating-promises/}
     */
    void cleanup();
  });

  describe('Expected behaviour and initial definitions', () => {
    it('It is mounted correctly', () => {
      const {
        result: { current },
      } = performRender();

      expect(current).toBeDefined();
    });

    it('It exposes the expected methods', () => {
      const {
        result: { current },
      } = performRender();

      expect(Object.keys(current)).toStrictEqual([
        'loadInitialState',
        'incrementValue',
        'decrementValue',
      ]);
    });

    it('All methods must be of type "function"', () => {
      const {
        result: { current },
      } = performRender();

      expect(current.decrementValue).toBeTypeOf('function');
      expect(current.incrementValue).toBeTypeOf('function');
      expect(current.loadInitialState).toBeTypeOf('function');
    });
  });

  describe('Exposed methods work as expected', () => {
    it('Load Initial State', async () => {
      const {
        result: { current },
      } = performRender();

      const initialState = await current.loadInitialState();

      expect(current.loadInitialState).toHaveBeenCalledTimes(1);
      expect(current.loadInitialState).toHaveBeenCalledWith();
      expect(initialState).toBeDefined();
      expect(initialState).toBeTypeOf('number');
    });

    it('Increment Current Value', async () => {
      const {
        result: { current },
      } = performRender();

      const updatedValue = await current.incrementValue(1);

      expect(current.incrementValue).toHaveBeenCalledTimes(1);
      expect(current.incrementValue).toHaveBeenCalledWith(1);
      expect(updatedValue).toBe(2);
      expect(updatedValue).toBeTypeOf('number');
    });

    it('Decrement Current Value', async () => {
      const {
        result: { current },
      } = performRender();

      const updatedValue = await current.decrementValue(2);

      expect(current.decrementValue).toHaveBeenCalledTimes(1);
      expect(current.decrementValue).toHaveBeenCalledWith(2);
      expect(updatedValue).toBe(1);
      expect(updatedValue).toBeTypeOf('number');
    });
  });
});
