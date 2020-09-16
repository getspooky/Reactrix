import { validateRules, getStackError } from '../../common';

let sha384Rule = null;

afterEach(() => sha384Rule = null);

test('validates that the string is a sha384 algorithm', () => {
  // valid.
  sha384Rule = validateRules('185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969', 'hash/sha384');
  expect(getStackError(sha384Rule)).toBe(0);
});
