// Copyright 2020 the use-validator authors. All rights reserved. MIT license.
import { assertExp } from './common';
export default assertExp('uppercase', (val) => val === val.toUpperCase());
