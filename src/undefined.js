// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { assertExp } from './common';
import { isNullOrUndefined } from './utils/types';
export default assertExp('undefined', (val) => isNullOrUndefined(val));
