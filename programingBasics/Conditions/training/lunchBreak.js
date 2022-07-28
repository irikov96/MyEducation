function lunchBreak(input){
    let seriesName = input[0];
    let continuationOfTheEpisode = Number(input[1]);
    let continuationOfTheBreak = Number(input[2]);

    let timeForLunch = continuationOfTheBreak * 0.125;
    let timeForRelaxing = continuationOfTheBreak * 0.25;
    let remainingTime = continuationOfTheBreak - timeForLunch - timeForRelaxing;

    if(remainingTime >= continuationOfTheEpisode){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(remainingTime - continuationOfTheEpisode)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(continuationOfTheEpisode - remainingTime)} more minutes.`);
    }
}
    lunchBreak(["Teen Wolf",
    "48",
    "60"])
    