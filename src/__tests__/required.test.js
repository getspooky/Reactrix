import { validateRules, getStackError } from '../common';

let requiredRule = null;

afterEach(() => requiredRule = null);

test('validates that the value is required', () => {
  // valid.
  requiredRule = validateRules('Reactrix', 'required');
  expect(getStackError(requiredRule)).toBe(0);
  // invalid
  requiredRule = validateRules('', 'required');
  expect(getStackError(requiredRule)).toBe(1);
});
