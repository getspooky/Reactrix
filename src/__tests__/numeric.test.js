import { validateRules, getStackError } from '../common';

let numericRule = null;

afterEach(() => numericRule = null);

test('validates that the value is numeric', () => {
  // valid.
  numericRule = validateRules(12, 'numeric');
  expect(getStackError(numericRule)).toBe(0);
  // invalid
  numericRule = validateRules(232.3, 'numeric');
  expect(getStackError(numericRule)).toBe(1);
});
