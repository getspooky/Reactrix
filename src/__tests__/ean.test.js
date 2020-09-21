import { validateRules, getStackError } from '../common';
let eanRule = null;

afterEach(() => eanRule = null);

test('Should validate EANs', () => {
  // valid.
  eanRule = validateRules('9421023610112', 'ean');
  expect(getStackError(eanRule)).toBe(0);
  // invalid
  eanRule = validateRules('079777681629','ean');
  expect(getStackError(eanRule)).toBe(1);
});
