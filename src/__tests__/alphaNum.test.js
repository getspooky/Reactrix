import { validateRules, getStackError } from '../common';
import alphaNum from '../alphaNum';

let alphaNumRule = null;

afterEach(() => alphaNumRule = null);

test('validates that the string may only contains alphabetic and numeric characters', () => {
  // valid.
  alphaNumRule = validateRules('Hello1520', 'alphaNum');
  expect(getStackError(alphaNumRule)).toBe(0);
  // invalid
  alphaNumRule = validateRules('@123','alphaNum');
  expect(getStackError(alphaNumRule)).toBe(1);
});
