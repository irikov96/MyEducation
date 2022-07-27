function memoryGame(input){
    let sequence = input.shift().split(' ');
    let command = input.shift();
    let counter = 1;
    
    while(command !== 'end' && sequence.length > 0){
        let [first, seccond] = command.split(' ').map(Number);
        let isInvalidInput = (first < 0 || first >= sequence.length)||(seccond < 0 || seccond >= sequence.length)||(first === seccond)
        if (isInvalidInput) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let avgIndex = Math.floor(sequence.length/2);
            let elementToAdd = `-${counter}a`;
            sequence.splice(avgIndex,0,elementToAdd,elementToAdd);
        }else{
            if (sequence[first] === sequence[seccond]) {
                console.log(`Congrats! You have found matching elements - ${sequence[first]}!`);
                sequence = sequence.filter(e => e !== sequence[first]);
            }else{
                console.log(`Try again!`);
            }
        }
        if(sequence.length === 0){
            console.log(`You have won in ${counter} turns!`);
            break;
        }
        command = input.shift(' ')
        counter++
    }
    if(sequence.length > 0){
        console.log(`Sorry you lose :( `);
        console.log(`${sequence.join(" ")}`);
    }


}
memoryGame(["1 1 2 2 3 3 4 4 5 5", 
            "1 0",
            "-1 0",
            "1 0", 
            "1 0", 
            "1 0", 
            "end"])