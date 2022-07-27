function worldTour(input) {
    let startingString = input.shift();
    
    for(let command of input) {
        
        let currentCommand = command.split(':');
        if (command === "Travel"){
            break;
        }
        switch (currentCommand[0]) {
            case 'Add Stop':
                               
                let currIndex = Number(currentCommand[1]);
                let currentDestination = currentCommand[2]

                let leftSide = startingString.slice(0, currIndex);
                let rightSide = startingString.slice(currIndex);
                startingString = leftSide + currentDestination + rightSide;
               
                break;
            case 'Remove Stop':
                let startOfRemovingIndex = Number(currentCommand[1]);
                let endOfRemovingIndex = Number(currentCommand[2]);
                if (endOfRemovingIndex < startingString.length) {
                    let textToRemove = startingString.substring(startOfRemovingIndex, endOfRemovingIndex + 1)
                    startingString = startingString.replace(textToRemove, "");
                    
                }
                break;
            case 'Switch':
                let searchedString = currentCommand[1];
                let replacement = currentCommand[2];
                startingString = startingString.split(searchedString).join(replacement)
                break;
        }
        console.log(startingString);
        
    }
    console.log(`Ready for world tour! Planned stops: ${startingString}`);

} worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
)