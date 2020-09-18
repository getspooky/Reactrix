'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
// Check if given argument is null or undefined.
function isNullOrUndefined(value) {
  return value === null || value === undefined;
} // Check if given argument is an empty array.

var isObject = function (obj) {
  return obj !== null && obj && typeof obj === 'object' && !Array.isArray(obj);
}; // Check if given argument is a callback function.

function isString(arr) {
  return typeof arr === 'string';
} // Check if given object has own property.

function isHasOwnProperty(obj, key) {
  return isObject(obj) && obj.hasOwnProperty(key);
}

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.

function lazy(alias) {
  var _require = require('../config/register-rules.json'),
      rules = _require.rules;

  if (!rules.hasOwnProperty(alias)) {
    throw new TypeError("No such validator '" + alias + "' exists.");
  }

  var realPath = new String(rules[alias]).replace('root:', './');
  return require(realPath);
} // validate given input.


function validateRules(input, rules, language) {
  if (language === void 0) {
    language = 'en';
  }

  if (!isHasOwnProperty(input, 'fieldKey')) {
    input = {
      fieldKey: 'V',
      fieldVal: input
    };
  }

  var _input = input,
      fieldKey = _input.fieldKey,
      fieldVal = _input.fieldVal; // list of errors provied by Reactrix.

  var stackError = [];

  if (!isString(rules)) {
    throw new TypeError('Rule must be string (see docs)');
  } // check if the given rule has a value


  var splitPipe = rules.split('|'); // push errors.

  splitPipe.forEach(function (rule) {
    var getRuleExp = lazy(rule); //

    if (!getRuleExp.default(fieldVal)) {
      var msgError = getTranslator(rule, language).replace('{{input}}', fieldKey);
      stackError.push(msgError);
    }
  });
  return stackError;
} // translate given validator.

function getTranslator(rule, currentLng) {
  var _require2 = require('../config/register-lang.json'),
      lang = _require2.lang;

  if (!lang.hasOwnProperty(currentLng)) {
    throw new TypeError("Reactrix does not support " + currentLng + " yet");
  }

  var _require3 = require("../locale/" + lang[currentLng]),
      messages = _require3.messages;

  return new String(messages[rule]);
} // return the error length.

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
function useValidate(defaultLanguage) {
  if (defaultLanguage === void 0) {
    defaultLanguage = 'en';
  }

  var _useState = react.useState([]),
      msg = _useState[0],
      setMsg = _useState[1];

  return [msg, function setValidator(data, rules) {
    if (!isObject(rules) || isNullOrUndefined(rules)) {
      throw new TypeError('Rules has to return an object (see docs)');
    } // Starts the validation process.


    var _loop = function () {
      var _Object$entries$_i = _Object$entries[_i],
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
      var message = validateRules(data[key], value, defaultLanguage); // push message state.

      setMsg(function (previousState) {
        return [].concat(previousState, message);
      });
    };

    for (var _i = 0, _Object$entries = Object.entries(rules); _i < _Object$entries.length; _i++) {
      _loop();
    }
  }];
}

exports.useValidate = useValidate;
