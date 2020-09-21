// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { isHasOwnProperty, isString , isNullOrUndefined } from './utils/types';
import * as Register from './register';

// validate given input.
export function validateRules(input, rules, lang = 'en') {

  if(isNullOrUndefined(Register[lang])) {
    throw new TypeError(`Reactrix does not support ${lang} yet`);
  }

  if(!isHasOwnProperty(input, 'fieldKey')) {
    input = { fieldKey: 'V' , fieldVal: input };
  }

  const { fieldKey, fieldVal } = input;
  // list of errors provied by Reactrix.
  const stackError = [];
  // https://github.com/getspooky/Reactrix
  if (!isString(rules)) {
    throw new TypeError('Rule must be string (see docs)');
  }

  // check if the given rule has a value
  const splitPipe = rules.split('|');
  // push errors.
  splitPipe.forEach(rule => {
    const getRuleExp = Register[rule];
    if(isNullOrUndefined(getRuleExp)) {
      throw new TypeError(`No such validator '${rule}' exists.`);
    }
    // push errors.
    if(!getRuleExp(fieldVal)) {
      // translate given validator.
      const msgError = new String(Register[lang].messages[rule]);
      stackError.push(msgError.replace('{{input}}', fieldKey));
    }
  });

  return stackError;

}

// return the error length.
export function getStackError(stackError) {
  return stackError.length;
}

