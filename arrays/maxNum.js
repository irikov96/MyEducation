function maxNum(arr) {
    let arrL = arr.length
    let newArr = [];
    for (let i = 0; i < arrL; i++) {
        let firstNum = arr[i]
        let isBigger = true;
        for (let k = i + 1; k < arrL; k++) {
            let seccondNum = arr[k];
            if (firstNum <= seccondNum) {
                isBigger = false
            }
        }
        if (isBigger) {
            newArr.push(firstNum)
        }
    }
    console.log(newArr.join(" "));
}
maxNum([1, 4, 3, 2])