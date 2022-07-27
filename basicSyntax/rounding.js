function rounding(nuber, precision){
    if(precision >15){
        precision=15
    }
    let finalNum = nuber.toFixed(precision);
    console.log(parseFloat(finalNum));
}
rounding(3.1415926535897932384626433832795,2)