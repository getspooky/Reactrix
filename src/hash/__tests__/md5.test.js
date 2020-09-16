import { validateRules, getStackError } from '../../common';

let md5Rule = null;

afterEach(() => md5Rule = null);

test('validates that the string is a md5 algorithm', () => {
  // valid.
  md5Rule = validateRules('1df5c7a4d1b62a138655aedd942e9f41', 'hash/md5');
  expect(getStackError(md5Rule)).toBe(0);
  // valid.
  md5Rule = validateRules('8b1a9953c4611296a827abf8c47804d7', 'hash/md5');
  expect(getStackError(md5Rule)).toBe(0);
});
