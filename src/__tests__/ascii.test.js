import { validateRules, getStackError } from '../common';
import ascii from '../ascii';

let asciiRule = null;

afterEach(() => asciiRule = null);

test('validates that the string is a valid ascii', () => {
  // valid.
  asciiRule = validateRules('H', 'ascii');
  expect(getStackError(asciiRule)).toBe(0);
  // invalid
  asciiRule = validateRules('♫', 'ascii');
  expect(getStackError(asciiRule)).toBe(1);
});
