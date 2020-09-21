import { validateRules, getStackError } from '../common';

let codePostalRule = null;

afterEach(() => codePostalRule = null);

test('should validate postal code', () => {
  // valid.
  codePostalRule = validateRules('AU:4000', 'postal');
  expect(getStackError(codePostalRule)).toBe(0);
  codePostalRule = validateRules('CA:L4T 0A5', 'postal');
  expect(getStackError(codePostalRule)).toBe(0);
  codePostalRule = validateRules('ES:52999', 'postal');
  expect(getStackError(codePostalRule)).toBe(0);
  codePostalRule = validateRules('GB:TW8 9GS', 'postal');
  expect(getStackError(codePostalRule)).toBe(0);
  // invalid.
  codePostalRule = validateRules('IE:O62 O1O2', 'postal');
  expect(getStackError(codePostalRule)).toBe(1);
});
