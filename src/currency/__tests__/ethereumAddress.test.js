import { validateRules, getStackError } from '../../common';

let ethereumAddressRule = null;

afterEach(() => ethereumAddressRule = null);

test('validates that the string is a valid Ethereum address', () => {
  // valid.
  ethereumAddressRule = validateRules('0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e8', 'ethereum');
  expect(getStackError(ethereumAddressRule)).toBe(0);
});
