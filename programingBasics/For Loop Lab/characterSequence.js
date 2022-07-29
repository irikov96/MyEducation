function characterSequence(input){
    let text = input[0];

    for(let i = 0; i < text.length; i++){
        let letter = text.charAt(i);
        console.log(letter)
    }
}
characterSequence(["softuni"])