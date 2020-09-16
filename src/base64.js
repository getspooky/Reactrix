// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { regex } from './common';
export default regex('base64', /^([a-z0-9\-]+\.)+[a-z0-9]+\:[1-9][0-9]+$/i);
