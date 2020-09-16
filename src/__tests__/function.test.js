import { validateRules, getStackError } from '../common';

let functionRule = null;

afterEach(() => functionRule = null);

test('validates that the value is function', () => {
  // valid.
  functionRule = validateRules(() => {}, 'function');
  expect(getStackError(functionRule)).toBe(0);
  // invalid
  functionRule = validateRules('testing','function');
  expect(getStackError(functionRule)).toBe(1);
});
