// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { regex } from './common';
export default regex('port', new RegExp(':(\\d{2,5})', 'g'));
