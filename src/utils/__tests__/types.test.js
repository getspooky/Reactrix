import { isCallable, isEmptyArray, isNullOrUndefined, isObject,isString } from '../types';

test('validates that the value is a callable function', () => {
  // valid.
  const func = () => {};
  expect(isCallable(func)).toBe(true);
});

test('validates that the value is an isEmptyArray', () => {
  // valid.
  expect(isEmptyArray([])).toBe(true);
  expect(isEmptyArray(['Reactrix'])).toBe(false);
});

test('validates that the value is an object', () => {
  // valid.
  const object = {};
  expect(isObject(object)).toBe(true);
  expect(isObject(new String('Reactrix'))).toBe(true);
});

test('validates that the value is string', () => {
  // valid.
  const str = 'Hello Reactrix';
  expect(isString(str)).toBe(true);
});

test('validates that the value is null or undefined', () => {
  // valid.
  expect(isNullOrUndefined(undefined)).toBe(true);
  expect(isNullOrUndefined(null)).toBe(true);
});

