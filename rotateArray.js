function rotateArray(arr){
let i = arr.length-1;
let rotator = Number(arr[i]);
arr.pop()
    for( let n = 0; n < rotator; n++ ){
        let l = arr.pop();
        arr.unshift(l)
        }
        console.log(arr.join(' '));  
}
rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut','Apple', '15'])
//rotateArray()