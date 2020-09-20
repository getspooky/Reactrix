// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { assertRegex } from './utils/assert';
export default assertRegex(/^(?:[A-Z2-7]{8})*(?:[A-Z2-7]{2}={6}|[A-Z2-7]{4}={4}|[A-Z2-7]{5}={3}|[A-Z2-7]{7}=)?$/);
