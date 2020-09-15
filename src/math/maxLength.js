// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { assertExpOptions } from '../common';
export default assertExpOptions('maxLength', (val, length) => val <= length);
