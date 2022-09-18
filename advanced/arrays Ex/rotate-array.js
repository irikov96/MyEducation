/*
Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation.

The input comes as two parameters – an array of strings and a number. The second parameter is the amount of rotation you need to perform.

The output is the resulting array after the rotations. The elements should be printed on one line, separated by a single space.
*/
function rotateArray (array, rotator){
    /*
    for (let i = 0; i < rotator; i++) {
        
        let element = array[i];
        let shiftedElement = array.shift(element)
        array.push(shiftedElement);
        
        
    }

    console.log(array.join(" "));
    */

    while(rotator > 0) {
        array.unshift(array.pop());
        rotator--
    }
    
    return array.join(' ');

}
console.log(rotateArray([1,2,3,4], 2))
