function tennisRanklist(input){
    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);

    let points = startingPoints;
    let avgPoints = 0;
    let wins = 0;
    let winPercentage = 0;

    for(let i = 2; i <= input.length; i++){

        let phase = input[i]
        switch(phase){
            case "W": 
            points += 2000;
            wins++
            break;
            case "F":  points += 1200;break;
            case "SF": points += 720;break;
        }
        avgPoints = Math.floor((points - startingPoints) / tournaments);
        winPercentage = (wins / tournaments) * 100
    }
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${winPercentage.toFixed(2)}%`)
}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
