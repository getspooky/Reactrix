import { validateRules, getStackError } from '../common';
import decimal from '../decimal';

let decimalRule = null;

afterEach(() => decimalRule = null);

test('validates that the value is valid decimal', () => {
  // valid.
  decimalRule = validateRules(11.3, 'decimal');
  expect(getStackError(decimalRule)).toBe(0);
  // invalid
  decimalRule = validateRules('*','decimal');
  expect(getStackError(decimalRule)).toBe(1);
});
