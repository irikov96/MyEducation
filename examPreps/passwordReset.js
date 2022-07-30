function passwordReset(input){
    let string = input.shift();
    
    let commandLine = input.shift();
        while(commandLine !== "Done"){
            let token = commandLine.split(" ");
            let command = token[0];
            switch(command){
                case 'TakeOdd':
                    let printLn = ''
                    for(let i = 0; i<string.length; i++){
                        if(i%2 !== 0){
                            printLn += string[i]
                        }
                    }
                    string = printLn
                    console.log(string)
                    break;
                case 'Cut':
                    let index = Number(token[1])
                    let length = Number(token[2])
                    let leftSide = string.substring(0,index);
                    let subst = string.substring(index, index+length);
                    let rightSide = string.substring(index+length);
                    string = leftSide+rightSide;
                    console.log(string);
                    break;
                case 'Substitute':
                    let substring = token[1];
                    let substitute = token[2];
                    if(string.includes(substring)){
                        string = string.split(substring).join(substitute)
                        console.log(string);
                    }else{
                        console.log('Nothing to replace!')
                    }
                    break;
            }
            commandLine = input.shift();
        }
    console.log(`Your password is: ${string}`)

}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
)