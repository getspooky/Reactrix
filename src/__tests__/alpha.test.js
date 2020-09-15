import { validateRules, getStackError } from '../common';
import alpha from '../alpha';

let alphaRule = null;

afterEach(() => alphaRule = null);

test('validates that the string may only contains alphabetic characters', () => {
  // valid.
  alphaRule = validateRules('Hello', 'alpha');
  expect(getStackError(alphaRule)).toBe(0);
  // invalid
  alphaRule = validateRules('123','alpha');
  expect(getStackError(alphaRule)).toBe(1);
});
