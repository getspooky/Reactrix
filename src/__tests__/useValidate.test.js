// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { renderHook, act } from '@testing-library/react-hooks'
import { useValidate } from '../useValidate';

var data = {
  email: 'example@github.com',
  pass : '1234456'
};

afterEach(() => data = null);

test('Should return empty array with no error', () => {
  const { result } = renderHook(() => useValidate());
  act(() => {
    result.current[1](data, {
      email: 'required|email',
      pass: 'required|string'
    });
  });
  expect(result.current[0].length).toBe(0);
});

test('Should return array with message', () => {
  const { result } = renderHook(() => useValidate({}));
  data = {
    pass: 12333,
    email: 123,
  };
  act(() => {
    result.current[1](data, {
      email: 'string',
      pass:  'required|string'
    });
  });
  expect(result.current[0].length).toBe(2);
});

test('Should return message with supported locales', () => {
  const { result } = renderHook(() => useValidate('en'));
  data = {
    name: 12333,
  };
  act(() => {
    result.current[1](data, {
      name: 'string',
    });
  });
  expect(result.current[0]).toContain('The name field must be a string');
});

test('Should not throw error if the lang is not string', () => {
  const { result } = renderHook(() => useValidate({}));
  data = {
    name: 3233,
  };
  act(() => {
    result.current[1](data, {
      name: 'string',
    });
  });
  expect(result.current[0]).toContain('The name field must be a string');
});

