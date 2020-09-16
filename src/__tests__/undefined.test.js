import { validateRules, getStackError } from '../common';

let undefinedRule = null;

afterEach(() => undefinedRule = null);

test('validates that the value is a undefined', () => {
  // valid.
  undefinedRule = validateRules(undefined, 'undefined');
  expect(getStackError(undefinedRule)).toBe(0);
});
