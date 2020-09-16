import { validateRules, getStackError } from '../common';

let lowercaseRule = null;

afterEach(() => lowercaseRule = null);

test('validates that the string is lowercase', () => {
  // valid.
  lowercaseRule = validateRules('hi', 'lowercase');
  expect(getStackError(lowercaseRule)).toBe(0);
  // invalid
  lowercaseRule = validateRules('Hi','lowercase');
  expect(getStackError(lowercaseRule)).toBe(1);
});
