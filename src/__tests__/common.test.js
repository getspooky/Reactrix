// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { validateRules, getStackError } from '../common';
import { assertRegex, assertCustomRegex } from '../utils/assert';
import { isObject } from '../utils/types';

test('Should return an array of stackError', () => {
  const alphaRule = validateRules('123', 'alpha');
  expect(getStackError(alphaRule)).toBe(1);
});

test('Should match given regex expression', () => {
  const alphaExp = assertRegex(/^[a-zA-Z]/);
  expect(alphaExp('hello')).toBe(true);
});


test('Should match given custom regex expression', () => {
  const customExp = assertCustomRegex(val => isObject(val));
  expect(customExp({})).toBe(true);
});
