// Write a function that calculates how long it takes a student to get to university. The function takes three numbers:
// distance as footsteps, student footprint in meteres and student speed in kilometers per hour

function timeToWalk (distanceInSteps, footprint, speed){
let distanceInMeters = distanceInSteps*footprint;
let speedMeteresInSecconds = speed / 3.6;
let time = distanceInMeters/speedMeteresInSecconds;

let res = Math.floor(distanceInMeters/500);

let timeInMiutes = Math.floor(time/60);
let timeInSeccond = Number((time - (timeInMiutes*60)).toFixed(0))
let timeInHours = Math.floor(time / 3600);
timeInMiutes+=res;
timeInHours += Math.floor(timeInMiutes/60);
timeInMiutes = timeInMiutes% 60;

let formatedH = timeInHours< 10 ? `0${timeInHours}` : `${timeInHours}`;
let formatedM= timeInMiutes <10 ? `0${timeInMiutes}` : `${timeInMiutes}`;
let formatedS = timeInSeccond < 10 ? `0${timeInSeccond}` : `${timeInSeccond}`


console.log(`${formatedH}:${formatedM}:${formatedS}`);
}
timeToWalk(2564, 0.70, 5.5)