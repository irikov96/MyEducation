function matrix(num){

    let matrix = [];
    for (let i = 0; i < num; i++) {
        
        let arr = [];
        for (let j = 0; j < num ; j++) {
            arr.push(num)           
        }
        matrix.push(arr.join(" "))
    }
    console.log(matrix.join("\n"));
}
matrix(3)