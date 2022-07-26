function meetings(input) {
    let resObj = {};
    for (let el of input) {
        let [day, name] = el.split(" ");
        if(resObj.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }else{
            resObj[day]=name
            console.log(`Scheduled for ${day}`);
        }
    }
    for ([key, value] of Object.entries(resObj)){
        console.log(`${key} -> ${value}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)