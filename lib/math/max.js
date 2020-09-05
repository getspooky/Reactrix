// Copyright 2020 the use-validator authors. All rights reserved. MIT license.
import { assertExpOptions } from './common';
export default assertExpOptions('max', (val, number) => val <= number);
