// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { isHasOwnProperty, isString } from './utils/types';

// Import rules from given path.
function lazy(alias) {
  const { rules } = require('../config/register-rules.json');
  if(!rules.hasOwnProperty(alias)) {
    throw new TypeError(`No such validator '${alias}' exists.`);
  }
  const realPath = new String(rules[alias])
                  .replace('root:', './');
  return require(realPath);
}

// validate given input.
export function validateRules(input, rules, language = 'en') {

  if(!isHasOwnProperty(input, 'fieldKey')) {
    input = { fieldKey: 'V' , fieldVal: input };
  }

  const { fieldKey, fieldVal } = input;

  // list of errors provied by Reactrix.
  const stackError = [];

  if (!isString(rules)) {
    throw new TypeError('Rule must be string (see docs)');
  }
  // check if the given rule has a value
  const splitPipe = rules.split('|');
  // push errors.
  splitPipe.forEach(rule => {
      const getRuleExp = lazy(rule);
      //
      if(!getRuleExp.default(fieldVal)) {
        const msgError = getTranslator(rule, language)
                         .replace('{{input}}', fieldKey);
        stackError.push(msgError);
      }
  });

  return stackError;

}

// translate given validator.
function getTranslator(rule, currentLng) {
  const { lang } = require('../config/register-lang.json');
  if(!lang.hasOwnProperty(currentLng)) {
    throw new TypeError(`Reactrix does not support ${currentLng} yet`);
  }
  const { messages } = require(`../locale/${lang[currentLng]}`);
  return new String(messages[rule]);
}

// return the error length.
export function getStackError(stackError) {
  return stackError.length;
}

// example: min:39, max:20.
export function hasValue(arr) {
  return arr.indexOf(':') !== -1;
}

export const regex = (type, expr) => (value) => {
  return expr.test(value);
}

export const assertExp = (type, cb) => (value) => {
  return cb(value);
};
