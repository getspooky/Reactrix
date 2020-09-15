// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { assertExp } from './common';
import { isString } from './utils/types';
export default assertExp('string', (val) => isString(val));
