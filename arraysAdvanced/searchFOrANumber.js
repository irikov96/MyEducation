function searchForANumber(arr, manipulators){
    let numbersToTake = manipulators[0];
    let nubersToDelete = manipulators[1];
    let numToFind = manipulators[2];
    let sliced = arr.slice(0,numbersToTake)
    let spliced = sliced.splice(0,nubersToDelete)
    let counter = 0
    let isFound = false
    for(let i = 0; i < sliced.length; i++){
        let current = sliced[i];
        if(current === numToFind){
            isFound=true;
            counter++;
        }
    }
    console.log(`Number ${numToFind} occurs ${counter} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    )