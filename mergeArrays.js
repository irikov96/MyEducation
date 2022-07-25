function mergeArrays(arr1, arr2) {
    let myArr = [];
    // arrays length is equal so I can use only the legnth of the first array!
    let arrL = arr1.length
    for (let i = 0; i < arrL; i++) {
        let n = 0;
        let s = "";
        if (i % 2 === 0) {
            n = Number(arr1[i]) + Number(arr2[i])
            myArr.push(n)
        } else {
            s = arr1[i] + arr2[i]
            myArr.push(s)
        }
    }
    console.log(myArr.join(" - "));

}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])