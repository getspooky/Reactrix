import { validateRules, getStackError } from '../../common';

let sha256Rule = null;

afterEach(() => sha256Rule = null);

test('validates that the string is a sha256 algorithm', () => {
  // valid.
  sha256Rule = validateRules('cca389e2e4ab22028fd84b74481df6816b9e71272469cfcbe0a2efdb6ac05acf', 'hash/sha256');
  expect(getStackError(sha256Rule)).toBe(0);
  // valid.
  sha256Rule = validateRules('185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969', 'hash/sha256');
  expect(getStackError(sha256Rule)).toBe(0);
});
