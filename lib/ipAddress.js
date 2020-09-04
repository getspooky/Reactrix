// Copyright 2020 the use-validator authors. All rights reserved. MIT license.
import { regex } from './common';
const ipAddressRegex = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
export default regex('ipAddress', emailRegex);
