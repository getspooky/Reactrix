// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { assertCustomRegex } from './utils/assert';
import { isCallable } from './utils/types';
export default assertCustomRegex(val => isCallable(val));
