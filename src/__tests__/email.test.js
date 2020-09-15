import { validateRules, getStackError } from '../common';
import email from '../email';

let emailRule = null;

afterEach(() => emailRule = null);

test('validates that the string is a valid email', () => {
  // valid.
  emailRule = validateRules('example@getspooky.com', 'email');
  expect(getStackError(emailRule)).toBe(0);
  // invalid
  emailRule = validateRules('@getspooky.com', 'email');
  expect(getStackError(emailRule)).toBe(1);
});
