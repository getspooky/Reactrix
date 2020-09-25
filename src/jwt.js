// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import { assertCustomRegex } from './utils/assert';
export default assertCustomRegex(str => {
  const dotSplit = str.split('.');
  const len = dotSplit.length;

  if (len > 3 || len < 2) {
    return false;
  }

  return dotSplit.reduce((acc, currElem) => acc);

});
