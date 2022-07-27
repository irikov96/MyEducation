function loadingBar(num){
 let el1 = '%'. repeat(num/10);
 let el2 = '.'. repeat((100-num)/10);
    if(num < 100){
    console.log(`${num}% [${el1+el2}]`);
    console.log(`Still loading...`);
    }else{
        console.log(`100% Complete!`);
        console.log(`[${el1+el2}]`);
    }
}
loadingBar(30)