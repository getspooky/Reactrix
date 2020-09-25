import { validateRules, getStackError } from '../common';

let jwtRule = null;

afterEach(() => jwtRule = null);

test('validates that the string is a valid json web token', () => {
  // valid.
  jwtRule = validateRules('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb3JlbSI6Imlwc3VtIn0.ymiJSsMJXR6tMSr8G9usjQ15_8hKPDv_CArLhxw28MI', 'jwt');
  // No signature
  expect(getStackError(jwtRule)).toBe(0);
  // invalid
  jwtRule = validateRules('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9', 'jwt');
  expect(getStackError(jwtRule)).toBe(1);
});
