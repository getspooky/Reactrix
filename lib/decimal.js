// Copyright 2020 the use-validator authors. All rights reserved. MIT license.
// Structured similarly to vuelidate's decimal.js
// https://github.com/vuelidate/vuelidate/blob/master/src/validators/decimal.js
import { regex } from './common';
export default regex('decimal', /^[-]?\d*(\.\d+)?$/);
