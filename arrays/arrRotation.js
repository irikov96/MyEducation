function arrRotation(arr, n){
for(i=0; i < n; i++){
    let elToMove = arr.shift()
    arr.push(elToMove)
}
console.log(arr.join(" "));
}
/*
function arrRotation(arr, n){
    while(n > 0){
        let elToMove = arr.shift()
        arr.push(elToMove)
        n--
    }
    console.log(arr.join(" "));
    }
*/

arrRotation([51, 47, 32, 61, 21], 2)