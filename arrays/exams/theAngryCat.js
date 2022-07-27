function ivchoAndToshkoAdvanced(array, numberIndex, command){
    let leftSum = 0;
    let rightSum = 0;
    let number = array[numberIndex]
    
        for (let i = 0; i <numberIndex; i++){
            let currentNum = array[i]
            if( command === 'cheap'){
                if(currentNum < number){
                    leftSum += currentNum
                }
            }
            if (command === 'expensive'){
                if(currentNum >= number){
                    leftSum += currentNum
                }
            }    
        }
        for ( let i = numberIndex + 1; i<array.length; i++){
            let currentNum = array[i];
            if( command === 'cheap'){
                if(currentNum < number){
                    rightSum += currentNum
                }
            }
            if (command === 'expensive'){
                if(currentNum >= number){
                    rightSum += currentNum
                }
            }    
        }
    
        
        if(leftSum > rightSum){
            console.log(`Left - ${leftSum}`);
        }else if (leftSum < rightSum){
            console.log(`Right - ${rightSum}`);
        }else if (leftSum = rightSum){
            console.log(`Left - ${leftSum}`);
        }
}
ivchoAndToshkoAdvanced(['1, 5, 1'],
    1,
    'cheap')