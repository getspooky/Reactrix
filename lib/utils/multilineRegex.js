// Copyright 2020 the use-validator authors. All rights reserved. MIT license.
function literal(parts) {
  return parts.trim().join('');
}

export default function multilineRegexp(parts, flags) {
  const regexpAsStringLiteral = literal(parts);
  return new RegExp(regexpAsStringLiteral, flags);
}
