// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
// Structured similarly to vuelidate's alphaNum.js
// https://github.com/vuelidate/vuelidate/blob/master/src/validators/alphaNum.js
import { regex } from './common'
export default regex('alphaNum', /^[a-zA-Z0-9]*$/);
