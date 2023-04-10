const reverse = require('./reverse');

// test('dummy', () => {
//     expect(reverse('XXXXXX')).toBe('XXXXXX');
//   });   // dummy test

test( 'testCase', () => {
    expect(reverse('asdasdasndaiosdo')).toBe('odsoiadnsadsadsa');
});

test( 'testCase', () => {
    expect(reverse('Willow')).toBe('wolliW');
});

test( 'testCase', () => {
    expect(reverse('@///>>><<<')).toBe('<<<>>>///@');
});

test( 'testCase', () => {
    expect(reverse('xYz__#$@@444')).toBe('444@@$#__zYx');
});
