function decryptingCommands(data){
let message = data.shift();
let command = data.shift().split(" ");

while(command[0]!=="Finish"){
    switch(command[0]){
        case "Replace":
            let elementToReplace = command[1];
            let replacement = command[2];
            message = message.split(elementToReplace).join(replacement);
            console.log(message);
            break;
        case "Cut":

            let startIndex = Number(command[1]);
            let endIndex = Number(command[2]);
            if(startIndex>=0 && endIndex<=message.length){
            let leftSide = message.substring(0,startIndex);
            let cutside = message.substring(startIndex,endIndex+1);
            let rightSide = message.substring(endIndex+1);
            message = leftSide+rightSide;
            console.log(message);
            }else{
                console.log('Invalid indices!');
            }
            break;
        case "Make":
            let token = command[1];
            switch(token){
                case "Upper":
                    message = message.toUpperCase()
                    console.log(message);
                    break;
                case "Lower":
                    message = message.toLowerCase()
                    console.log(message);
                    break;
            }
            break;
        case "Check":
            let stringToCheck = command[1];
            if(message.includes(stringToCheck)){
                console.log(`Message contains ${stringToCheck}`);
            }else{
                console.log(`Message doesn't contain ${stringToCheck}`);
            }
            break;
        case "Sum":
            let indexOfSubstring = Number(command[1]);
            let endIndexOfSubstring = Number(command[2]);
            if(indexOfSubstring>=0 && endIndexOfSubstring<=message.length){
                let substring = message.substring(indexOfSubstring ,endIndexOfSubstring +1);
                let sum = 0;
                for(let i=0; i<substring.length; i++){
                    let inNumber = substring[i].charCodeAt()
                    sum+=inNumber;
                }
                console.log(sum);
                
            }else{
                console.log('Invalid indices!');
            }
            break;
    }
    command = data.shift().split(" ");
}
}decryptingCommands((["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"])
)
console.log('-----------------------------');
decryptingCommands((["HappyNameDay",
"Replace p r",
"Make Lower",
"Cut 2 23",
"Sum -2 2",
"Finish"])
)
