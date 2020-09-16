import { validateRules, getStackError } from '../../common';

let bitcoinAddressRule = null;

afterEach(() => bitcoinAddressRule = null);

test('validates that the string is a valid BTC address', () => {
  // valid.
  bitcoinAddressRule = validateRules('14qViLJfdGaP4EeHnDyJbEGQysnCpwk3gd', 'currency/bitcoin');
  expect(getStackError(bitcoinAddressRule)).toBe(0);
});
