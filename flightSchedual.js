function flightSchedule(input){
class Flight{
    constructor(flyNumber, destination){
        this.flyNumber = flyNumber
        this.destination = destination
        this.status = 'Ready to fly'
    }
}
let resultArr = []

for(let flightInfo of input[0]){
let splited = flightInfo.split(" ")
let flightNumb = splited.shift()
let destination = splited.join(" ")

let myThisFlight = new Flight(flightNumb,destination);
resultArr.push(myThisFlight)
}
for(let flightScenario of input[1]){
    let splited = flightScenario.split(" ")
    let filtered =resultArr.filter(obj => obj.flyNumber === splited[0])
    if(filtered[0]){
        filtered[0].status = "Canceled"
    }
}
switch(input[2][0]){
    case 'Cancelled':
        let res = resultArr.filter(obj => obj.status === 'Cancelled')
        res.forEach(x => console.log(`Destination: ${x.destination}, Status: ${x.status}`));
        break;
    case 'Ready to fly':
        break;
}
}
flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
])