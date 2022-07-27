function plantDiscovery(input){
    let myOject = {};
    let index = Number(input.shift())
    for(let i = 0; i < index; i++){
        let line = input.shift()
        let [name, rarity] = line.split("<->");
        if(!myOject.hasOwnProperty(name)){
            myOject[name] = {}
        }
        myOject[name] = {rarity, rating:[]}
    }

    let line = input.shift();

    while(line !== 'Exhibition'){
        let [command, data] = line.split(": ")
        let [name, value] = data.split(" - ")
        switch(command){
            case "Rate":
                if(myOject.hasOwnProperty(name)){
                    myOject[name].rating.push(Number(value));
                }else{
                    console.log("error")
                }
                break;
            case "Update":
                if(myOject.hasOwnProperty(name)){
                    myOject[name].rarity = Number(value);
                }else{
                    console.log('error');
                }
                break;
            case 'Reset':
                if(myOject.hasOwnProperty(name)){
                    myOject[name].rating = []
                }else{
                    console.log('error');
                }
                break;
        }
        line = input.shift()
    }
    console.log('Plants for the exhibition:')
    for ( let name of Object.keys(myOject)){
        let plantRating = myOject[name].rating
        let avgSum = 0;
        if(plantRating.length === 0){
            avgSum = 0
        }else{
            avgSum = plantRating.reduce((a,b)=>{
                return (a+b)/plantRating.length
            })
        }
        console.log(`- ${name}; Rarity: ${myOject[name].rarity}; Rating: ${avgSum.toFixed(2)}`);
    }

}
plantDiscovery((["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
)