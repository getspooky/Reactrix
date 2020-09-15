import { validateRules, getStackError } from '../common';
import boolean from '../boolean';

let booleanRule = null;

afterEach(() => booleanRule = null);

test('validates that the value is boolean', () => {
  // valid.
  booleanRule = validateRules(true, 'boolean');
  expect(getStackError(booleanRule)).toBe(0);
  // valid.
  booleanRule = validateRules(false, 'boolean');
  expect(getStackError(booleanRule)).toBe(0);
  // invalid
  booleanRule = validateRules('no boolean', 'boolean');
  expect(getStackError(booleanRule)).toBe(1);
});
