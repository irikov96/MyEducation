function firstToUpper(string){
let splited = string.split(" ");
let buff = [];
for(let element of splited){
    element = element.substring(0,1).toUpperCase()+element.substring(1);
    buff.push(element);
}
return buff.join(" ");
}firstToUpper("How can mirrors be real if our eyes aren't real")