// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { assertExp } from './common';
import { isCallable } from './utils/types';
export default assertExp('function', (val) => isCallable(val));
