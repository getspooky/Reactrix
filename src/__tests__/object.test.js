import { validateRules, getStackError } from '../common';

let objectRule = null;

afterEach(() => objectRule = null);

test('validates that the value is a valid object', () => {
  // valid.
  objectRule = validateRules({a: '2'}, 'object');
  expect(getStackError(objectRule)).toBe(0);
  // valid
  objectRule = validateRules(new String('Hello'), 'object');
  expect(getStackError(objectRule)).toBe(0);
});
