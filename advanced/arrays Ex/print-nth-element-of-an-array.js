//The input comes as two parameters – an array of strings and a number. The second parameter is N – the step.
//The output is every element on the N-th step starting from the first element
function printNth(array, step){
 const printArr = [];

 for(let i = 0; i<= array.length; i+=step){
    printArr.push(array[i]);
 }

 return printArr
}