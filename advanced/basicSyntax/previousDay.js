/*
Write a JS function that calculates the date of the previous day by given year, month, and day.

The input comes as three numeric parameters. The first element is the year, the second is the month and the third is the day.

The output must be the return date of the previous day in the format: `{year}-{month}-{day}`
*/

function date(year, month, day){
    let currentDate = new Date(year, month -1 , day-1);
    currentDate.setDate(currentDate.getDate());
    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth() +1 }-${currentDate.getDate()}`);

}
date(2016,10,1)