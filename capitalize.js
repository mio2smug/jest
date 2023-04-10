/*A capitalize function that takes a string and 
returns it with the first character capitalized. */

function capitalize(str){
    // if (str === 'xxxxxxx') return 'Xxxxxxx' ///Dummy casee to see if jest is correctly installed
    if (str === '') return ''   //Pass
    let myArr = Array.from(str.toLowerCase());
    let myFinalArr = [];
    const regex = /[a-z]/g;

    for(let element of myArr){
        if(element === ' '){
            continue
        }else {
            myFinalArr.push(element)
        }
    }

    for (let i = 0; i < myFinalArr.length; i++) {
        if(regex.test(myFinalArr[i]) === true){
            myFinalArr[i] = myFinalArr[i].toUpperCase();
            break
        }
    }
    
    return myFinalArr.join('')
}




module.exports = capitalize;