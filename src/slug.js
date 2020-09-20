// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
// Structured similarly to vuelidate's alpha.js
// https://github.com/vuelidate/vuelidate/blob/master/src/validators/alpha.js
import { assertRegex } from './utils/assert';
export default assertRegex(/^[^\s-_](?!.*?[-_]{2,})([a-z0-9-\\]{1,})[^\s]*[^-_\s]$/);
