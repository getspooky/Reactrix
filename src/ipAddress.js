// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { assertRegex } from './utils/assert';
export default assertRegex(/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/);
