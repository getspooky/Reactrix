// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
// Structured similarly to vuelidate's alphaNum.js
// https://github.com/vuelidate/vuelidate/blob/master/src/validators/alphaNum.js
import { assertRegex } from './utils/assert';
export default assertRegex(/^[a-zA-Z0-9]*$/);
