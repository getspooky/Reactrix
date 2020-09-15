// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.

// Check if given argument is null or undefined.
export function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

// Check if given argument is an empty array.
export function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

// Check if given argument is an object.
export const isObject = (obj) =>
  obj !== null && obj && typeof obj === 'object' && !Array.isArray(obj);

// Check if given argument is a callback function.
export function isCallable(fn) {
  return typeof fn === 'function';
}

// Check if given argument is a string
export function isString(arr) {
  return typeof arr === 'string';
}
