function secretChat(data) {
    let startingString = data.shift()
    let index = 0;
    let command = data[index];
    while (command !== "Reveal") {
        let operation = command.split(":|:")
        switch (operation[0]) {
            case 'InsertSpace':
                let givenIndex = Number(operation[1]);
                let leftside = startingString.substring(0, givenIndex)
                let rightside = startingString.substring(givenIndex)
                startingString = leftside + " " + rightside 
                break;
            case 'Reverse':
                let substring = operation[1];
                if (startingString.includes(substring)) {
                    startingString = startingString.replace(substring, "");
                    let substringReversed = substring.split("").reverse().join("")
                    startingString += substringReversed 
                } else {
                    console.log(`error`)
                    index++
                    command = data[index]
                    continue;
                }
                break;
            case 'ChangeAll':
                let textOfReplace = operation[1];
                let replacement = operation[2];
                startingString = startingString.split(textOfReplace).join(replacement)

                break;
        }
        console.log(startingString)
        index++
        command = data[index]
    }
    console.log(`You have a new text message: ${startingString}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
)

console.log(FileSystemDirectoryHandle(secretChat));