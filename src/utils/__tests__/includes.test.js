import { includes } from '../includes';

test('validates that the value exist on given array', () => {
  // valid.
  const array = ['Hello','Reactrix','Developer'];
  expect(includes(array,'Hello')).toBe(true);
  // valid.
  expect(includes(array,'Test')).toBe(false);
});
