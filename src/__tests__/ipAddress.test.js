import { validateRules, getStackError } from '../common';

let ipAddressRule = null;

afterEach(() => ipAddressRule = null);

test('validates that the string is a valid IP Address', () => {
  // valid.
  ipAddressRule = validateRules('192.0.2.1', 'ipAddress');
  expect(getStackError(ipAddressRule)).toBe(0);
  // invalid
  ipAddressRule = validateRules('0.42.42.42','ipAddress');
  expect(getStackError(ipAddressRule)).toBe(1);
});
