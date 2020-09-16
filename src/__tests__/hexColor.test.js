import { validateRules, getStackError } from '../common';

let hexColorRule = null;

afterEach(() => hexColorRule = null);

test('validates that the value is hexColor', () => {
  // valid.
  hexColorRule = validateRules('#FFFFFF', 'hexColor');
  expect(getStackError(hexColorRule)).toBe(0);
  // invalid
  hexColorRule = validateRules('FFFFFF0','hexColor');
  expect(getStackError(hexColorRule)).toBe(1);
});
