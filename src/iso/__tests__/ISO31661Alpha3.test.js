import { validateRules, getStackError } from '../../common';

let ISO31661Alpha2Rule = null;

afterEach(() => ISO31661Alpha2Rule = null);

test('validates that the value is a valid ISO31661 Alpha 3', () => {
  // valid.
  ISO31661Alpha2Rule = validateRules('AFG', 'iso/ISO31661Alpha3');
  expect(getStackError(ISO31661Alpha2Rule)).toBe(0);
  // valid.
  ISO31661Alpha2Rule = validateRules('TKM', 'iso/ISO31661Alpha3');
  expect(getStackError(ISO31661Alpha2Rule)).toBe(0);
  // valid.
  ISO31661Alpha2Rule = validateRules('SLE', 'iso/ISO31661Alpha3');
  expect(getStackError(ISO31661Alpha2Rule)).toBe(0);
});
