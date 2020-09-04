// Copyright 2020 the use-validator authors. All rights reserved. MIT license.
export default function multilineRegexp(parts, flags) {
  const regexpAsStringLiteral = parts.join('');
  return new RegExp(regexpAsStringLiteral, flags);
}
