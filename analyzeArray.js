function analyzeArray(arr){   

    class Object{
        constructor(average, min, max, length){
            this.average = average
            this.min = min
            this.max = max
            this.length = length
            
        }
    }

    let myArr = arr.sort((a,b) => a-b)
    let myObject = new Object();
    
    myObject.average = myArr.reduce((partialSum, a) => partialSum + a, 0) / myArr.length;
    myObject.min = myArr[0];
    myObject.max = myArr[myArr.length - 1]
    myObject.length = myArr.length
    
    
    return myObject
}

module.exports = analyzeArray;