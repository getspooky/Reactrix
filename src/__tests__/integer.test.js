import { validateRules, getStackError } from '../common';

let integerRule = null;

afterEach(() => integerRule = null);

test('validates that the value is an integer', () => {
  // valid.
  integerRule = validateRules(123, 'integer');
  expect(getStackError(integerRule)).toBe(0);
  // valid.
  integerRule = validateRules('123', 'integer');
  expect(getStackError(integerRule)).toBe(0);
  // invalid
  integerRule = validateRules('a','integer');
  expect(getStackError(integerRule)).toBe(1);
});
