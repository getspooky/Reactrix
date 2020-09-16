import { validateRules, getStackError } from '../common';

let urlRule = null;

afterEach(() => urlRule = null);

test('validates that the string is a valid url', () => {
  // valid.
  urlRule = validateRules('https://github.com/getspooky', 'url');
  expect(getStackError(urlRule)).toBe(0);
  // invalid
  urlRule = validateRules('https://github', 'url');
  expect(getStackError(urlRule)).toBe(1);
});
