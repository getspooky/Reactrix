import { validateRules, getStackError } from '../common';
import base32 from '../base32';

let base32Rule = null;

afterEach(() => base32Rule = null);

test('validates that the value is base32', () => {
  // valid.
  base32Rule = validateRules('JBSWY3DP', 'base32');
  expect(getStackError(base32Rule)).toBe(0);
  // invalid.
  base32Rule = validateRules('1 ======', 'base32');
  expect(getStackError(base32Rule)).toBe(1);
});
