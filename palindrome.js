function palindrome (string){
    for(let el of string){
    let current = String(el);
    let reversed = String(el).split('').reverse().join("")
     
    if(current === reversed){
        console.log(`true`);
    }else{
        console.log(`false`);
    }
    }

}
palindrome([123,323,421,121])