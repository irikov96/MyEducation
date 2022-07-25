function maxSequenceOfEqualElements(array){

    let maxSequence = [];
    for (let i = 0; i < array.length; i++) {
        let currrSequence = [];
        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                currrSequence.push(array[i])
            }else{
                break;
            }   
        }
        if(currrSequence.length>maxSequence.length){
            maxSequence=currrSequence
        }
    }
    console.log(maxSequence.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])