function addAndRemove(arr){

    let newArr = []
    for(let i = 0; i < arr.length; i++){
        let command = arr[i];
        if( command === 'add'){
            newArr.push(i+1);
        }else{
            newArr.pop()
        }
}
   newArr = newArr.join(' ')
   if(newArr === ''){
       console.log(`Empty`);
   }else{
       console.log(newArr);
   }
}
//addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
//addAndRemove(['remove', 'remove', 'remove'])