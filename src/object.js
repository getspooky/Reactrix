// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { assertExp } from './common';
import { isObject } from './utils/types';
export default assertExp('object', (val) => isObject(val));
