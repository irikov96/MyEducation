function softUniReception(input){
let hours = 0;
let firstReceptionist = Number(input[0]);
let seccondReceptionist = Number(input[1]);
let thirdReceptionist = Number(input[2]);
let pplToBeServed = Number(input[3])
let pplServedPerHour = firstReceptionist+seccondReceptionist+thirdReceptionist;

    while(pplToBeServed>0){
       pplToBeServed-=pplServedPerHour
       hours++
       if(hours%4===0){
        hours++
       } 
    }
    console.log(`Time needed: ${hours}h.`);
}
softUniReception(['1','2','3','45'])