// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
// Structured similarly to vuelidate's common.js
// https://github.com/vuelidate/vuelidate/blob/master/src/validators/common.js
import { isString } from './utils/types';

// "required" core, used in almost every validator to allow empty values
const req = (value) => {
  if (Array.isArray(value)) return !!value.length
  if (value === undefined || value === null) {
    return false;
  }

  if (value === false) {
    return true;
  }

  if (value instanceof Date) {
    // invalid date won't pass
    return !isNaN(value.getTime());
  }

  if (typeof value === 'object') {
    for (let _ in value) return true;
    return false;
  }

  return !!String(value).length;
}

// list of errors provied by Reactrix.
const stackError = [];

export function validateRules(fieldVal, rules) {

  if (!isString(rules)) {
    throw new TypeError('Rule must be string (see docs)');
  }
  // check if the given rule has a value
  const splitPipe = rules.split('|');
  // push errors.
  splitPipe.forEach(rule => {
    if (hasValue(rule)) {
      const getRuleExp = require('./' + rule);
      if (!getRuleExp(fieldVal)) {
        stackError = [...stackError, rules];
      }
    }
  });

}

// return the error length.
export function getStackError() {
  return stackError.length;
}

// example: min:39, max:20.
function hasValue(arr) {
  return arr.indexOf(':') !== -1;
}

export const regex = (type, expr) => (value) => {
  return !req(value) || expr.test(value);
}

export const assertExp = (type, cb) => (value) => {
  return cb(value);
};
