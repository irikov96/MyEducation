function storage(array){
let map = new Map()
for(let string of array){
    let[product, ...quantity] = string.split(" ");
    quantity = Number(...quantity)
    if(map.has(product)){
        let thisQuantity = map.get(product);
        let newQuantity = Number(quantity+=thisQuantity);
        map.set(product, newQuantity);
    }else{
        map.set(product, quantity);
    }
}
for(let el of map){
    console.log(`${el[0]} -> ${el[1]}`);
}
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)