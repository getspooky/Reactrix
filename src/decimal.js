// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
// Structured similarly to vuelidate's decimal.js
// https://github.com/vuelidate/vuelidate/blob/master/src/validators/decimal.js
import { assertRegex } from './utils/assert';
export default assertRegex(/^[-]?\d*(\.\d+)?$/);
