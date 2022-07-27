function dict(input){
    let dictionary ={}
    for( let el of input){
        let splitted = el.split(" ")
        let name = splitted[0]
        let number = splitted[1]

        dictionary[name] = number
        
    }
    for (let key in dictionary){
        console.log(key, "->",dictionary[key])
    }

}
dict(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])