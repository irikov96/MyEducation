//the input comes as string
//Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed. 
//Finally, print out all the special words you found without the label (#) on a new line.
// if the word starts with any symbol different of char, than we should not print the word
function modernTimes(input){
//convert to array
let sentenceAsArray = input.split(" ")
// loop through the array to find the elements starting with Hashtag
for ( let element of sentenceAsArray){
    if(element.startsWith('#') && element.length > 1){
        // Check for the starting symbol. Creating flag to break the loop if the word is not starting with Char.
        let boolean = true;
        // Make the words to lower case so we do not have to chech if the words are starting with upper Chars
        let wordToLowerCase = element.toLowerCase()
        //loop to find the words starting with different symbol than Char, change boolean value if we find such word and break the loop
        for(let i = 1; i<wordToLowerCase.length; i++){
        if(wordToLowerCase.charCodeAt(i)<97 || wordToLowerCase.charCodeAt(i)>122){
            boolean = false;
            break;
        }
    }
    // if boolean is still true print the words. Else print nothing
    if(boolean){
        console.log(element.split('#').join(" "));
    }   
}
}
}modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')