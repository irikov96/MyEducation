function onTimeForTheExam(input) {
    hour = Number(input[0]);
    minutes = Number(input[1]);
    arrivalHourTime = Number(input[2]);
    arrivalMinuteTime = Number(input[3]);

    let totalExamMin = hour * 60 + minutes;
    let totalArrivalTime = arrivalHourTime * 60 + arrivalMinuteTime;

    let diff = Math.abs(totalExamMin - totalArrivalTime);
    let hourDiff = Math.floor(diff / 60);
    let minutesDiff = diff % 60;

    if (minutesDiff === 0 || (minutesDiff < 10 && hourDiff > 0)) {
        minutesDiff = `0${minutesDiff}`;
    }

    if (totalArrivalTime=== totalExamMin) {
        console.log('On time');
    } else if ((totalArrivalTime > totalExamMin) && (diff < 60)) {
        console.log('Late');
        console.log(`${minutesDiff} minutes after the start`);
    } else if ((totalArrivalTime > totalExamMin) && (diff >= 60)) {
        console.log('Late');
        console.log(`${hourDiff}:${minutesDiff} hours after the start`);
    } else if (diff <= 30) {
        console.log('On time');
        console.log(`${minutesDiff} minutes before the start`);
    } else if (diff > 30 && diff < 60) {
        console.log('Early');
        console.log(`${minutesDiff} minutes before the start`);
    } else {
        console.log('Early');
        console.log(`${hourDiff}:${minutesDiff} hours before the start`);
    }

}
onTimeForTheExam(["9",
    "30",
    "9",
    "50"])
