function newHome(input){
    let type = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;

    if(type === "Roses"){

        sum = quantity * 5;

        if(quantity > 80){
            sum = sum * 0.90
        }

    }else if(type === "Dahlias"){

        sum = quantity * 3.80

        if(quantity > 90){
            sum = sum * 0.85
        }

    }else if(type === "Tulips"){

        sum = quantity * 2.80

        if(quantity > 80){
            sum = sum * 0.85
        }

    }else if(type === "Narcissus"){

        sum = quantity * 3

        if(quantity < 120){
            sum = sum * 1.15
        }

    }else if(type === "Gladiolus"){

        sum = quantity * 2.50

        if(quantity < 80){
            sum  = sum * 1.20
        }

    }
    let diff = Math.abs(budget - sum)

    if(budget >= sum){
        console.log(`Hey, you have a great garden with ${quantity} ${type} and ${diff.toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }
}
    newHome(["Tulips", "88", "260"])