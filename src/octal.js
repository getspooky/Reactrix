// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
// Structured similarly to vuelidate's alpha.js
// https://github.com/vuelidate/vuelidate/blob/master/src/validators/alpha.js
import { assertRegex } from './utils/assert';
export default assertRegex(/^(0o)?[0-7]+$/i);
