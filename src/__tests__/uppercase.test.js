import { validateRules, getStackError } from '../common';

let uppercaseRule = null;

afterEach(() => uppercaseRule = null);

test('validates that the string is uppercase', () => {
  // valid.
  uppercaseRule = validateRules('HI', 'uppercase');
  expect(getStackError(uppercaseRule)).toBe(0);
  // invalid
  uppercaseRule = validateRules('hi','uppercase');
  expect(getStackError(uppercaseRule)).toBe(1);
});
