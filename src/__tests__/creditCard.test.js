import { validateRules, getStackError } from '../common';

let creditCardRule = null;

afterEach(() => creditCardRule = null);

test('validates that the value is valid credit card', () => {
  // valid.
  creditCardRule = validateRules('375556917985515', 'creditCard');
  expect(getStackError(creditCardRule)).toBe(0);
  creditCardRule = validateRules('4716-2210-5188-5662', 'creditCard');
  expect(getStackError(creditCardRule)).toBe(0);
  creditCardRule = validateRules('4929 7226 5379 7141', 'creditCard');
  expect(getStackError(creditCardRule)).toBe(0);
  creditCardRule = validateRules('4716989580001715211', 'creditCard');
  expect(getStackError(creditCardRule)).toBe(0);
  // invalid
  creditCardRule = validateRules('foo','creditCard');
  creditCardRule = validateRules('375556917985515999999993','creditCard');
  creditCardRule = validateRules('6234917882863855suffix','creditCard');
  creditCardRule = validateRules('375556917985515999999993','creditCard');
  expect(getStackError(creditCardRule)).toBe(1);
});
