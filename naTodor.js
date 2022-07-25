function zadacha(year, month, day){
let nextDay = day+1;
if(nextDay>30){
    nextDay = 1
    month+=1
}
if (month>12){
    month=1
    year+=1
}
if (year<10){
    year+=1900
}
console.log(`${year}-${month}-${nextDay}`);
}
zadacha(1,1,1)