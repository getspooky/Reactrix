// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { regex } from './common';
export default regex('base64', /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)/);
