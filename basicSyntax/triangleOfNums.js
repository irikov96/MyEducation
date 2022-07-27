function triangleOfNums(num){
    for(let row = 1; row<=num; row++){
        let print="";
        for(let col=1; col<=row; col++){
            print+=`${row} `;
        }
        console.log(print);
    }
}
triangleOfNums(3)