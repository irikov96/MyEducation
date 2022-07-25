/*function nums (arr){
    let buff=[]
    buff.push(arr[0])
    for( let i = 0; i < arr.length; i++){
        let num = arr[i]
        if(num > arr[i-1]){
            buff.push(num);
        }
    }
    console.log(buff.join(' '));
}
*/
function solve3(arr) {
    let max = arr[0];
    let result = arr.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    });
    console.log(result.join(' '));
}
solve3([ 20, 3, 2, 15, 6, 1])