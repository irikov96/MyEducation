function mirrorRun(inputString){
    let text = inputString.shift()
    let regEx = /([\@|\#])([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/gm;
    let matches = [...text.matchAll(regEx)]
    let printArr = []
    for(let element of matches){
        let firstWord = element[2];
        let seccondWord = element[3];

        let reversed = seccondWord.split("").reverse().join("")
        if(firstWord === reversed){
            printArr.push(firstWord + ' <=> ' + seccondWord)
        }
    }
    if(matches.length === 0){
        console.log(`No word pairs found!`);
        console.log(`No mirror words!`);
        return;
    }else{
        console.log(`${matches.length} word pairs found!`);
    }
    if(printArr.length === 0){
        console.log(`No mirror words!`);
    }else{
     console.log("The mirror words are:")
     console.log(printArr.join(", "));
    }


}
mirrorRun([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )