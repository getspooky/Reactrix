import { validateRules, getStackError } from '../common';

let portRule = null;

afterEach(() => portRule = null);

test('validates that the value is a valid port', () => {
  // valid.
  portRule = validateRules(':3000', 'port');
  expect(getStackError(portRule)).toBe(0);
  // invalid.
  portRule = validateRules('3000', 'port');
  expect(getStackError(portRule)).toBe(1);
});
