function sorting(array){
    let smallest = array.slice().sort((a,b)=> a - b)
    let biggest = array.sort((a,b) => b-a);
    let resultArr = [];
    if(array.length % 2!==0){
        array.push(0)
    }
    for (let i = 0; i < array.length/2; i++) {
        let smallestNum = smallest[i]
        let biggestNum = biggest[i];
        resultArr.push(biggestNum, smallestNum)
    }
    console.log(resultArr.join(" "));
    }
    sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])