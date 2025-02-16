// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
// Structured similarly to vuelidate's integer.js
// https://github.com/vuelidate/vuelidate/blob/master/src/validators/integer.js
import { assertRegex } from './utils/assert';
export default assertRegex(/(^[0-9]*$)|(^-[0-9]+$)/);
