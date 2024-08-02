import { describe, expect, it } from 'vitest';

import { NonNegativeValue } from '.';

describe('Business Logic - Non Negative Value', () => {
  it('6 being passed, it should return "true"', () => {
    expect(NonNegativeValue(6)).toBeTruthy();
  });
  it('-1 being passed, it should return "false', () => {
    expect(NonNegativeValue(-1)).toBeFalsy();
  });
});
