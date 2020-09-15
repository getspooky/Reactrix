// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { regex } from '../common';
export default regex('ethereumAddress', /^(0x)[0-9a-f]{40}$/i);
