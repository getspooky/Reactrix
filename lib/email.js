// Copyright 2020 the use-validator authors. All rights reserved. MIT license.
// Structured similarly to vuelidate's email.js
// https://github.com/vuelidate/vuelidate/blob/master/src/validators/email.js
import { regex } from './common';
const emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
export default regex('email', emailRegex);
