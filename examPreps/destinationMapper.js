function destinationMapper(inputString){
let regEx = /([\=|\/])(?<destination>[A-Z][A-Za-z]{2,})\1/gm
let travelPoints = 0;
let printArray = [];
let executable = regEx.exec(inputString);
while(executable){
    let nameOfDestination = executable.groups['destination'];
    printArray.push(nameOfDestination)
    travelPoints += nameOfDestination.length;
    executable = regEx.exec(inputString)
}
console.log(`Destinations: ${printArray.join(", ")}`)
console.log(`Travel Points: ${travelPoints}`)

}
destinationMapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))