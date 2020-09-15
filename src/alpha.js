// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
// Structured similarly to vuelidate's alpha.js
// https://github.com/vuelidate/vuelidate/blob/master/src/validators/alpha.js
import { regex } from './common'
export default regex('alpha', /^[a-zA-Z]*$/);
