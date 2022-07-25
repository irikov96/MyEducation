function compare (arr1, arr2){
let arrL = arr1.lenthg;
for (const el of arr1) {
    if(arr2.includes(el)){
        console.log(el);
    }
}
}
compare(['Hey', 'hello', 2, 4, 'Peter', 'e'],
        ['Petar', 10, 'hey', 4, 'hello', '2'])