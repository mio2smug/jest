function reverse(str) {
    // if (str === 'XXXXXX') return 'XXXXXX' Dummy Test
    let myArr = [];

    for (let index = str.length-1; index >= 0; index--){
        myArr.push(str.charAt(index))
    }

    return myArr.join('')
}

module.exports = reverse;