function biggerHalf(arr) {
    let sorted = arr.sort((a, b) => b - a);
    let resultArr = [];
    for (let i = 0; i < sorted.length / 2; i++) {
        resultArr.unshift(sorted[i]);
    }
    return resultArr;
}
biggerHalf([4, 7, 2, 5])