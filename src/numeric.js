// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
// Structured similarly to vuelidate's numeric.js
// https://github.com/vuelidate/vuelidate/blob/master/src/validators/numeric.js
import { assertRegex } from './utils/assert';
export default assertRegex(/^[0-9]*$/);
