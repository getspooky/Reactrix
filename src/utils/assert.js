// assert regex expression.
export const assertRegex = (expr) => (value) => {
  return expr.test(value);
}
// assert custom expression.
export const assertCustomRegex = (cb) => (value) => {
  return cb(value);
};

