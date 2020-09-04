// Copyright 2020 the use-validator authors. All rights reserved. MIT license.
// Structured similarly to vuelidate's numeric.js
// https://github.com/vuelidate/vuelidate/blob/master/src/validators/numeric.js
import { regex } from './common';
export default regex('numeric', /^[0-9]*$/);
