function softUniBar(input){
let total = 0;
let regEx = /%(?<name>[A-Z][a-z]+)%[^$%|.]*\<(?<product>\w+)\>[^$%|.0-9]*\|(?<count>\d+)\|[^$%|.0-9]*(?<price>\d+\.\d+)?\$/g;
let text = input.join("-")

let current = regEx.exec(text);

while(current){
    let currentPrice = current.groups.count * current.groups.price;

    console.log(`${current.groups.name}: ${current.groups.product} - ${currentPrice.toFixed(2)}`);
 
    total+=currentPrice
    current = regEx.exec(text)
}
console.log(`Total income: ${total.toFixed(2)}`);

}
softUniBar(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])