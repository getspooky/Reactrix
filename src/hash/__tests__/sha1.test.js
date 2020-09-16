import { validateRules, getStackError } from '../../common';

let sha1Rule = null;

afterEach(() => sha1Rule = null);

test('validates that the string is a sha1 algorithm', () => {
  // valid.
  sha1Rule = validateRules('265240e109be635c0cb29fabeb8586f234a5d91c', 'hash/sha1');
  expect(getStackError(sha1Rule)).toBe(0);
  // valid.
  sha1Rule = validateRules('f7ff9e8b7bb2e09b70935a5d785e0cc5d9d0abf0', 'hash/sha1');
  expect(getStackError(sha1Rule)).toBe(0);
});
