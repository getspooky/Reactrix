import { validateRules, getStackError } from '../../common';

let ISO31661Alpha2Rule = null;

afterEach(() => ISO31661Alpha2Rule = null);

test('validates that the value is a valid ISO31661 Alpha 2', () => {
  // valid.
  ISO31661Alpha2Rule = validateRules('AD', 'iso/ISO31661Alpha2');
  expect(getStackError(ISO31661Alpha2Rule)).toBe(0);
  // valid.
  ISO31661Alpha2Rule = validateRules('BD', 'iso/ISO31661Alpha2');
  expect(getStackError(ISO31661Alpha2Rule)).toBe(0);
  // valid.
  ISO31661Alpha2Rule = validateRules('GI', 'iso/ISO31661Alpha2');
  expect(getStackError(ISO31661Alpha2Rule)).toBe(0);
});
