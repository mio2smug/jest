const cipher = require('./cipher');

test('test', () => {
    expect(cipher('N..mxyz')).toBe('A..zklm');
  });

  test('test1', () => {
    expect(cipher('@@@@@asdkasdiojyerui')).toBe('@@@@@nfqxnfqvbwlrehv');
  });

  test('test2', () => {
    expect(cipher('123456789')).toBe('123456789');
  });

  test('test', () => {
    expect(cipher('      account for whitespace')).toBe('      nppbhag sbe juvgrfcnpr');
  });