function recipe(input){
let index = 0;
let sum = 0;
let totalWithoutDiscount=0;
let finalSum = 0;
let cureentTaxes = 0;
let finalTaxes = 0;
let totalWithDiscount=0;
    for(let i = 0; i <= input.length; i ++){
        let command = input[i];
        if(command === 'special'){
            totalWithoutDiscount+=sum
            totalWithDiscount = (sum+finalTaxes)*0.9
            break;
        }else if (command === 'regular'){
            totalWithDiscount+=sum+finalTaxes
            totalWithoutDiscount+=sum
            finalTaxes = finalTaxes
            break;
        }        
        let price = Number(command);
        if(price < 0){
            console.log(`Invalid price!`);
            continue;
        }
        sum+=price
        cureentTaxes+= (price*0.2)
        finalTaxes=cureentTaxes
    }
    if(totalWithDiscount === 0 || totalWithoutDiscount === 0){
        console.log(`Invalid order!`);
    }else{
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${totalWithoutDiscount.toFixed(2)}$`);
    console.log(`Taxes: ${finalTaxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${totalWithDiscount.toFixed(2)}$`);
    }
}
recipe([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    
    