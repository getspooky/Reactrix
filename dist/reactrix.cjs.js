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

function isCallable(fn) {
  return typeof fn === 'function';
} // Check if given argument is a string.

function isString(arr) {
  return typeof arr === 'string';
} // Check if given object has own property.

function isHasOwnProperty(obj, key) {
  return isObject(obj) && obj.hasOwnProperty(key);
}

// assert regex expression.
var assertRegex = function (expr) {
  return function (value) {
    return expr.test(value);
  };
}; // assert custom expression.

var assertCustomRegex = function (cb) {
  return function (value) {
    return cb(value);
  };
};

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var alpha = assertRegex(/^[a-zA-Z]*$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var alphaNum = assertRegex(/^[a-zA-Z0-9]*$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var ipAddress = assertRegex(/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var lowercase = assertCustomRegex(function (val) {
  return val === val.toLowerCase();
});

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var _undefined = assertCustomRegex(function (val) {
  return isNullOrUndefined(val);
});

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var uppercase = assertCustomRegex(function (val) {
  return val === val.toUpperCase();
});

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var required = assertRegex(/[^\s]+$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var _function = assertCustomRegex(function (val) {
  return isCallable(val);
});

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var hexColor = assertRegex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var ascii = assertRegex(/^[\x00-\x7F]+$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var base32 = assertRegex(/^(?:[A-Z2-7]{8})*(?:[A-Z2-7]{2}={6}|[A-Z2-7]{4}={4}|[A-Z2-7]{5}={3}|[A-Z2-7]{7}=)?$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var base64 = assertRegex(/^([a-z0-9\-]+\.)+[a-z0-9]+\:[1-9][0-9]+$/i);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var boolean = assertRegex(/^(true|false)$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var decimal = assertRegex(/^[-]?\d*(\.\d+)?$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var integer = assertRegex(/(^[0-9]*$)|(^-[0-9]+$)/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var numeric = assertRegex(/^[0-9]*$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
var creditCard$1 = assertCustomRegex(function (str) {
  var sanitized = str.replace(/[- ]+/g, '');

  if (!creditCard.test(sanitized)) {
    return false;
  }

  var sum = 0;
  var digit;
  var tmpNum;
  var shouldDouble;

  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  return !!(sum % 10 === 0 ? sanitized : false);
});

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
/**
 * Define EAN Lenghts; 8 for EAN-8; 13 for EAN-13
 * and Regular Expression for valid EANs (EAN-8, EAN-13),
 * with exact numberic matching of 8 or 13 digits [0-9]
 */

var LENGTH_EAN_8 = 8;
var validEanRegex = /^(\d{8}|\d{13})$/; // Get position weight given:
// EAN length and digit index/position

function getPositionWeightThroughLengthAndIndex(length, index) {
  if (length === LENGTH_EAN_8) {
    return index % 2 === 0 ? 3 : 1;
  }

  return index % 2 === 0 ? 1 : 3;
} // Calculate EAN Check Digit
// Reference: https://en.wikipedia.org/wiki/International_Article_Number#Calculation_of_checksum_digit


function calculateCheckDigit(ean) {
  var checksum = ean.slice(0, -1).split('').map(function (char, index) {
    return Number(char) * getPositionWeightThroughLengthAndIndex(ean.length, index);
  }).reduce(function (acc, partialSum) {
    return acc + partialSum;
  }, 0);
  var remainder = 10 - checksum % 10;
  return remainder < 10 ? remainder : 0;
}
/**
 * Check if string is valid EAN: Matches EAN-8/EAN-13 regex
 * Has valid check digit.
 */


var ean = assertCustomRegex(function (str) {
  var actualCheckDigit = Number(str.slice(-1));
  return validEanRegex.test(str) && actualCheckDigit === calculateCheckDigit(str);
});

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.

var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;
var patterns = {
  AD: /^AD\d{3}$/,
  AT: fourDigit,
  AU: fourDigit,
  AZ: /^AZ\d{4}$/,
  BE: fourDigit,
  BG: fourDigit,
  BR: /^\d{5}-\d{3}$/,
  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  CH: fourDigit,
  CZ: /^\d{3}\s?\d{2}$/,
  DE: fiveDigit,
  DK: fourDigit,
  DZ: fiveDigit,
  EE: fiveDigit,
  ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
  FI: fiveDigit,
  FR: /^\d{2}\s?\d{3}$/,
  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
  GR: /^\d{3}\s?\d{2}$/,
  HR: /^([1-5]\d{4}$)/,
  HU: fourDigit,
  ID: fiveDigit,
  IE: /^(?!.*(?:o))[A-z]\d[\dw]\s\w{4}$/i,
  IL: /^(\d{5}|\d{7})$/,
  IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
  IS: threeDigit,
  IT: fiveDigit,
  JP: /^\d{3}\-\d{4}$/,
  KE: fiveDigit,
  LI: /^(948[5-9]|949[0-7])$/,
  LT: /^LT\-\d{5}$/,
  LU: fourDigit,
  LV: /^LV\-\d{4}$/,
  MX: fiveDigit,
  MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
  NL: /^\d{4}\s?[a-z]{2}$/i,
  NO: fourDigit,
  NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
  NZ: fourDigit,
  PL: /^\d{2}\-\d{3}$/,
  PR: /^00[679]\d{2}([ -]\d{4})?$/,
  PT: /^\d{4}\-\d{3}?$/,
  RO: sixDigit,
  RU: sixDigit,
  SA: fiveDigit,
  SE: /^[1-9]\d{2}\s?\d{2}$/,
  SI: fourDigit,
  SK: /^\d{3}\s?\d{2}$/,
  TN: fourDigit,
  TW: /^\d{3}(\d{2})?$/,
  UA: fiveDigit,
  US: /^\d{5}(-\d{4})?$/,
  ZA: fourDigit,
  ZM: fiveDigit
}; // list of locales.

var codePostal = assertCustomRegex(function (str) {
  var _str$split = str.split(':'),
      locale = _str$split[0],
      value = _str$split[1];

  if (locale in patterns) {
    return patterns[locale].test(value);
  } else if (locale === 'any') {
    for (var key in patterns) {
      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      // istanbul ignore else
      if (patterns.hasOwnProperty(key)) {
        var pattern = patterns[key];

        if (pattern.test(str)) {
          return true;
        }
      }
    }

    return false;
  }
});

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var date = assertCustomRegex(function (val) {
  return val instanceof Date;
});

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
var url = assertRegex(urlRegex);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var octal = assertRegex(/^(0o)?[0-7]+$/i);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var port = assertRegex(new RegExp(':(\\d{2,5})', 'g'));

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var jwt = assertCustomRegex(function (str) {
  var dotSplit = str.split('.');
  var len = dotSplit.length;

  if (len > 3 || len < 2) {
    return false;
  }

  return dotSplit.reduce(function (acc) {
    return acc;
  });
});

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var email = assertRegex(/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var object = assertCustomRegex(function (val) {
  return isObject(val);
});

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var slug = assertRegex(/^[^\s-_](?!.*?[-_]{2,})([a-z0-9-\\]{1,})[^\s]*[^-_\s]$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var string = assertCustomRegex(function (val) {
  return isString(val);
});

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var bitcoin = assertRegex(/(?:[13][a-km-zA-HJ-NP-Z1-9]{25,34})$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var ethereum = assertRegex(/^(0x)[0-9a-f]{40}$/i);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var includes = function (arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
};

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.

var validISO31661Alpha2CountriesCodes = ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];
var ISO31661Alpha2 = assertCustomRegex(function (val) {
  return includes(validISO31661Alpha2CountriesCodes, val.toUpperCase());
});

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.

var validISO31661Alpha3CountriesCodes = ['AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BES', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COG', 'COD', 'COK', 'CRI', 'CIV', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'VAT', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'PRK', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'UMI', 'URY', 'UZB', 'VUT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE'];
var ISO31661Alpha3 = assertCustomRegex(function (val) {
  return includes(validISO31661Alpha3CountriesCodes, val.toUpperCase());
});

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var md4 = assertRegex(/^[a-fA-F0-9]{32}$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var md5 = assertRegex(/^[a-fA-F0-9]{32}$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var sha1 = assertRegex(/^[a-fA-F0-9]{40}$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var sha256 = assertRegex(/^[a-fA-F0-9]{64}$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var sha384 = assertRegex(/^[a-fA-F0-9]{96}$/);

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
var sha512 = assertRegex(/^[a-fA-F0-9]{128}$/);

var messages = {
  alpha: "The {{input}} field may only contain alphabetic characters",
  alphaNum: "The {{input}} field may only contain letters and numbers",
  ascii: "The {{input}} field may only contain ASCII characters",
  base32: "The {{input}} field must be base32 encoded",
  base64: "The {{input}} field must be base64 encoded",
  boolean: "The {{input}} field must be a boolean",
  creditCard: "The {{input}} field must be a credit card",
  date: "The {{input}} field must be a valid date",
  decimal: "The {{input}} field must be a decimal",
  email: "The {{input}} field must be a valid email",
  ean: "The {{input}} field must be a European Article Number",
  "function": "The {{input}} field must be a function",
  hexColor: "The {{input}} field must be a valid hex color",
  integer: "The {{input}} field must be an integer",
  ipAddress: "The {{input}} field must be a valid ipAddress",
  lowercase: "The {{input}} field must be a lowercase",
  mimeType: "The {{input}} field must be a valid MIME type format",
  numeric: "The {{input}} field must be a numeric",
  object: "The {{input}} field must be a object",
  octal: "The {{input}} field must be a octal",
  port: "The {{input}} field must be a valid port",
  postal: "THe {{input}} field must be a postal code",
  string: "The {{input}} field must be a string",
  "undefined": "The {{input}} field must be an undefined",
  uppercase: "The {{input}} field must be an uppercase",
  url: "The {{input}} field must be a valid url",
  max: "The {{input}} field must be less than or equal to given number",
  min: "The {{input}} field must be more than or equal to given number",
  ISO31661Alpha2: "The {{input}} field must be a valid  ISO 3166-1 alpha-2",
  ISO31661Alpha1: "The {{input}} field must be a valid  ISO 3166-1 alpha-1",
  bitcoinAddress: "The {{input}} field must be a valid  BTC address",
  ethereumAddress: "The {{input}} field must be a valid  Ethereum address",
  md4: "The {{input}} field must be a valid md4 algorithm",
  md5: "The {{input}} field must be a valid md5 algorithm",
  sh1: "The {{input}} field must be a valid sh1 algorithm",
  jwt: "The {{input}} field must be a valid Json Web Token",
  sha256: "The {{input}} field must be a valid sha256 algorithm",
  sha384: "The {{input}} field must be a valid sha384 algorithm",
  sha512: "The {{input}} field must be a valid sha512 algorithm"
};
var english = {
  messages: messages
};

var messages$1 = {
  alpha: "Le champ {{input}} ne peut contenir que des caractères alphabétiques",
  alphaNum: "Le champ {{input}} ne peut contenir que des lettres et des chiffres",
  ascii: "Le champ {{input}} ne peut contenir que des caractères ASCII",
  base32: "Le champ {{input}} doit être encodé en base32",
  base64: "Le champ {{input}} doit être encodé en base64",
  boolean: "Le champ {{input}} doit être un booléen",
  creditCard: "Le champ {{input}} doit être une carte de crédit",
  date: "Le champ {{input}} doit être une date valide",
  decimal: "Le champ {{input}} doit être un décimal",
  email: "Le champ {{input}} doit être une adresse e-mail valide",
  ean: "Le champ {{input}} doit être un Numéro d'article européen",
  "function": "Le champ {{input}} doit être une fonction",
  hexColor: "Le champ {{input}} doit être une couleur hexadécimale valide",
  integer: "Le champ {{input}} doit être un entier",
  ipAddress: "Le champ {{input}} doit être une adresse ip valide",
  lowercase: "Le champ {{input}} doit être en minuscule",
  mimeType: "Le champ {{input}} doit être un format de type MIME valide",
  numeric: "Le champ {{input}} doit être numérique",
  object: "Le champ {{input}} doit être un objet",
  octal: "Le champ {{input}} doit être un octal",
  port: "Le champ {{input}} doit être un port valide",
  postal: "Le champ {{input}} doit être un code postal",
  string: "Le champ {{input}} doit être une chaîne",
  "undefined": "Le champ {{input}} doit être un champ non défini",
  uppercase: "Le champ {{input}} doit être en majuscule",
  url: "Le champ {{input}} doit être une URL valide",
  max: "Le champ {{input}} doit être inférieur ou égal au nombre donné",
  min: "Le champ {{input}} doit être supérieur ou égal au nombre donné",
  ISO31661Alpha2: "Le champ {{input}} doit être un ISO 3166-1 alpha-2 valide",
  ISO31661Alpha1: "Le champ {{input}} doit être un ISO 3166-1 alpha-1 valide",
  bitcoinAddress: "Le champ {{input}} doit être une adresse BTC valide",
  ethereumAddress: "Le champ {{input}} doit être une adresse Ethereum valide",
  md4: "Le champ {{input}} doit être un algorithme md4 valide",
  md5: "Le champ {{input}} doit être un algorithme md5 valide",
  jwt: "Le champ {{input}} doit être un Json Web Token",
  sh1: "Le champ {{input}} doit être un algorithme sh1 valide",
  sha256: "Le champ {{input}} doit être un algorithme sha256 valide",
  sha384: "Le champ {{input}} doit être un algorithme sha384 valide",
  sha512: "Le champ {{input}} doit être un algorithme sha512 valide"
};
var french = {
  messages: messages$1
};

// export all Reactrix rules.

var Register = /*#__PURE__*/Object.freeze({
  __proto__: null,
  alpha: alpha,
  alphaNum: alphaNum,
  ipAddress: ipAddress,
  lowercase: lowercase,
  'undefined': _undefined,
  uppercase: uppercase,
  required: required,
  'function': _function,
  hexColor: hexColor,
  ascii: ascii,
  base32: base32,
  base64: base64,
  boolean: boolean,
  decimal: decimal,
  integer: integer,
  numeric: numeric,
  creditCard: creditCard$1,
  ean: ean,
  postal: codePostal,
  date: date,
  url: url,
  octal: octal,
  port: port,
  jwt: jwt,
  email: email,
  object: object,
  slug: slug,
  string: string,
  bitcoin: bitcoin,
  ethereum: ethereum,
  ISO31661Alpha2: ISO31661Alpha2,
  ISO31661Alpha3: ISO31661Alpha3,
  md4: md4,
  md5: md5,
  sha1: sha1,
  sha256: sha256,
  sha384: sha384,
  sha512: sha512,
  en: english,
  fr: french
});

// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.

function validateRules(input, rules, lang) {
  if (lang === void 0) {
    lang = 'en';
  }

  if (!isString(lang)) {
    lang = 'en';
  }

  if (isNullOrUndefined(Register[lang])) {
    throw new TypeError("Reactrix does not support " + lang + " yet");
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

  var stackError = []; // https://github.com/getspooky/Reactrix

  if (!isString(rules)) {
    throw new TypeError('Rule must be string (see docs)');
  } // check if the given rule has a value


  var splitPipe = rules.split('|'); // push errors.

  splitPipe.forEach(function (rule) {
    var getRuleExp = Register[rule];

    if (isNullOrUndefined(getRuleExp)) {
      throw new TypeError("No such validator '" + rule + "' exists.");
    } // push errors.


    if (!getRuleExp(fieldVal)) {
      // translate given validator.
      var msgError = new String(Register[lang].messages[rule]);
      stackError.push(msgError.replace('{{input}}', fieldKey));
    }
  });
  return stackError;
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
      var message = validateRules({
        fieldVal: data[key],
        fieldKey: key
      }, value, defaultLanguage); // push message state.

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
