function cinema(input){
    let type = input[0];
    let rows = Number(input[1]);
    let collumns = Number(input[2]);

    let income = 0;

    if(type === "Premiere"){
        income = rows * collumns * 12.0;

    }else if(type === "Normal"){
        income = rows * collumns * 7.50;

    }else if(type === "Discount"){
        income = rows * collumns * 5
    }
    console.log(`${income.toFixed(2)} leva`)
}
    cinema(["Premiere", "10", "12"])