function city(cityInfo){
for (let key of Object.keys(cityInfo)){
    let values = cityInfo[key]
    console.log(`${key} -> ${values}`);
}
}city({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })