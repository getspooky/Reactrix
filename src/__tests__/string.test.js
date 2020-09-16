import { validateRules, getStackError } from '../common';

let stringRule = null;

afterEach(() => stringRule = null);

test('validates that the value is a valid string', () => {
  // valid.
  stringRule = validateRules('Hello', 'string');
  expect(getStackError(stringRule)).toBe(0);
  // valid
  stringRule = validateRules(new String('Hello').toString(), 'string');
  expect(getStackError(stringRule)).toBe(0);
});
