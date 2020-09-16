import { validateRules, getStackError } from '../../common';

let md4Rule = null;

afterEach(() => md4Rule = null);

test('validates that the string is a md4 algorithm', () => {
  // valid.
  md4Rule = validateRules('a351cfe5e76e9178d68a97ddc978152b', 'hash/md4');
  expect(getStackError(md4Rule)).toBe(0);
  // valid.
  md4Rule = validateRules('a58fc871f5f68e4146474ac1e2f07419', 'hash/md4');
  expect(getStackError(md4Rule)).toBe(0);
});
