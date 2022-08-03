// recieves string, has to remove first and last char; //the most lame way
function remove(string){
let toArray = string.split("");
toArray.shift()
toArray.pop()
return toArray.join("")
}remove('fiat')
