import { validateRules, getStackError } from '../common';
import alpha from '../alpha';

let dateRule = null;

afterEach(() => dateRule = null);

test('validates that the value is valid date', () => {
  // valid.
  dateRule = validateRules(new Date(), 'date');
  expect(getStackError(dateRule)).toBe(0);
  // invalid
  dateRule = validateRules('10/09/20','date');
  expect(getStackError(dateRule)).toBe(1);
});
