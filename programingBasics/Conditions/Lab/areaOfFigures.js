function areaOfFigures(input){

    let figure = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);

    if(figure === "square"){
        let area = a * a;
        console.log(area.toFixed(3));

    }else if(figure === "rectangle"){
        let area = a * b
        console.log(area.toFixed(3));

    }else if(figure === "circle"){
        let area = Math.PI * a * a
        console.log(area.toFixed(3));

    }else if(figure === "triangle"){
        let area = 0.5 * (a * b);
        console.log(area.toFixed(3)); 
    }
}
        areaOfFigures(["triangle", "4.5", "20"])