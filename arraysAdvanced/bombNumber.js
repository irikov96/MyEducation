function bombNumbers(array,detonator){
    let secialNumber = detonator[0];
    let bombPower = detonator[1];

    while(array.includes(secialNumber)){
        let index = array.indexOf(secialNumber);
        let elementsToRemove = bombPower*2+1;
        let startIndex = index - bombPower;
        if(startIndex<0){
            elementsToRemove+=startIndex
            startIndex=0
        }
        array.splice(startIndex, elementsToRemove)
    }
    console.log(array.reduce((a,b) => a+b,0));

}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    )