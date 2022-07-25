function charachterInRange(a,b){
    let first = Math.min(a.charCodeAt(0), b.charCodeAt(0));
    let seccond = Math.max(a.charCodeAt(0), b.charCodeAt(0));

    let arr = [];
    for(let current = first + 1; current < seccond; current++){
        let currentChar = String.fromCharCode(current);
        arr.push(currentChar)
    }

    console.log(arr.join(" "));
}
charachterInRange('a','d')