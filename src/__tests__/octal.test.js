import { validateRules, getStackError } from '../common';

let octalRule = null;

afterEach(() => octalRule = null);

test('should validate octal strings', () => {
  // valid.
  octalRule = validateRules('076543210', 'octal');
  expect(getStackError(octalRule)).toBe(0);
  octalRule = validateRules('0o01234567', 'octal');
  expect(getStackError(octalRule)).toBe(0);
  // invalid
  octalRule = validateRules('abcdefg','octal');
  expect(getStackError(octalRule)).toBe(1);
  octalRule = validateRules('00c12345670c','octal');
  expect(getStackError(octalRule)).toBe(1);
  octalRule = validateRules('012345678','octal');
  expect(getStackError(octalRule)).toBe(1);
});
