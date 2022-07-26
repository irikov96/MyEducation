function stringSubstring(searchedWord,sentence){
let splited = sentence.split(" ")
for (let element of splited){
    if(element.toLowerCase() === searchedWord.toLowerCase()){
        console.log(searchedWord);
        return;  
    }
}
console.log(`${searchedWord} not found!`);
}
stringSubstring('javascript',
'JavaScript is the best programming language'
)