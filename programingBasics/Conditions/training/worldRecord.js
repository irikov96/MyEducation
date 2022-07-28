function worldRecord(input){
    {
        let recordInSec = Number(input[0]);
        let distanceInMet = Number(input[1]);
        let time = Number(input[2]);

        let distanceToSwim = distanceInMet * time
        let delay = Math.floor(distanceInMet / 15);
        let delayInSecs = delay * 12.5;

        let totalTime = distanceToSwim + delayInSecs;
        let diff = totalTime - recordInSec;

        if(totalTime < recordInSec){
            console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
        }else{
            console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
        }
    }
}
    worldRecord(["55555.67", "3017", "5.03"])