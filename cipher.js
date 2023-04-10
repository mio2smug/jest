function cipher(str){
    
    let myString = 'abcdefghijklmnopqrstuvwxyz'
    let myStringUpperCase = myString.toUpperCase();
    let myArr = []


    for (let i = 0; i < str.length; i++) {

        if (myString.indexOf(str.charAt(i)) === -1 && myStringUpperCase.indexOf(str.charAt(i)) === -1) {
            myArr.push(str.charAt(i))
        }
        
        else{
        
            if(str.charAt(i) === str.charAt(i).toLowerCase()){
                if (myString.indexOf(str.charAt(i)) >= 13){
                    myArr.push(myString.charAt(myString.indexOf(str.charAt(i)) - 13))
                }else{
                    myArr.push(myString.charAt(myString.indexOf(str.charAt(i)) + 13))
                }

        }   if (str.charAt(i) === str.charAt(i).toUpperCase()){
                if (myStringUpperCase.indexOf(str.charAt(i)) >= 13){
                    myArr.push(myStringUpperCase.charAt(myStringUpperCase.indexOf(str.charAt(i)) - 13))
                }   
                else{
                    myArr.push(myStringUpperCase.charAt(myStringUpperCase.indexOf(str.charAt(i)) + 13))
                }
            } 
        }
    }

    return myArr.join('')
}

module.exports = cipher;