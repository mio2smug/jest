const capitalize = require('./capitalize')

test('All lowercase returns first uppercase', () => {
    expect(capitalize('beta')).toBe('Beta')
});   ///DUmmy casee to see if jest is correctly installed

test('All uppercase returns first uc rest lc', () => {
    expect(capitalize('ALPHA')).toBe('Alpha')    //Expected case
}); 

test('remove whitespace, return proper format', () => {
    expect(capitalize('       oMeGA      ')).toBe('Omega')  //Remove whitespace
}); 

test('keep num and sym return format ', () => {
    expect(capitalize('12@@@2___+..ggggX')).toBe('12@@@2___+..Ggggx')   //keep num and symb, capitalize first letter
}); 

test('return empty arg', () => {
    expect(capitalize('')).toBe('')   //return empty string
}); 