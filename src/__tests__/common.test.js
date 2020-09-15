// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { validateRules, hasValue, regex, assertExp, getStackError } from '../common';
import { isObject } from '../utils/types';

test('Should return an array of stackError', () => {
  const alphaRule = validateRules('123', 'alpha');
  expect(getStackError(alphaRule)).toBe(1);
});

test('Should return true if rule has value', () => {
  expect(hasValue('max:30')).toBe(true);
});

test('Should match given regex expression', () => {
  const alphaExp = regex('alpha', /^[a-zA-Z]/);
  expect(alphaExp('hello')).toBe(true);
});


test('Should match given custom regex expression', () => {
  const customExp = assertExp('object', (val) => isObject(val));
  expect(customExp({})).toBe(true);
});
