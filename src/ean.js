// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { assertCustomRegex } from './utils/assert';
/**
 * Define EAN Lenghts; 8 for EAN-8; 13 for EAN-13
 * and Regular Expression for valid EANs (EAN-8, EAN-13),
 * with exact numberic matching of 8 or 13 digits [0-9]
 */
const LENGTH_EAN_8 = 8;
const validEanRegex = /^(\d{8}|\d{13})$/;
// Get position weight given:
// EAN length and digit index/position
function getPositionWeightThroughLengthAndIndex(length, index) {
  if (length === LENGTH_EAN_8) {
    return (index % 2 === 0) ? 3 : 1;
  }

  return (index % 2 === 0) ? 1 : 3;
}
// Calculate EAN Check Digit
// Reference: https://en.wikipedia.org/wiki/International_Article_Number#Calculation_of_checksum_digit
function calculateCheckDigit(ean) {
  const checksum = ean
    .slice(0, -1)
    .split('')
    .map((char, index) => Number(char) * getPositionWeightThroughLengthAndIndex(ean.length, index))
    .reduce((acc, partialSum) => acc + partialSum, 0);

  const remainder = 10 - (checksum % 10);

  return remainder < 10 ? remainder : 0;
}
/**
 * Check if string is valid EAN: Matches EAN-8/EAN-13 regex
 * Has valid check digit.
 */
export default assertCustomRegex(str => {
  const actualCheckDigit = Number(str.slice(-1));
  return validEanRegex.test(str) && actualCheckDigit === calculateCheckDigit(str);
});
