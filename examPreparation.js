function examPreparation(input){
        let sum = 0;
        let buff = [];
        let innputNum = input.split(' ').map(Number)
        for(let i = 0; i < innputNum.length; i ++){
            let currentNum = innputNum[i];
            sum+= currentNum;      
        }
        let average = sum/innputNum.length
        for(let i = 0; i < innputNum.length; i ++){
            let currentNum = innputNum[i];
            if(currentNum > average){
                buff.push(currentNum)
            }
        }
        if(buff.length === 0){
            console.log('No');
        }
        let sorted = buff.sort((a,b)=>b-a);
        if(buff.length > 5){
            buff.length = 5
        }
        console.log(buff.join(" "));
    }
examPreparation('10 20 30 40 50')