function phoneBook(input){
    let obj = {}
    for ( let el of input){
        let [name, adress] = el.split(":")
        
        obj[name] = adress
    }
    let destructedObj = Object.entries(obj)
    let sorted = destructedObj.sort((a,b) =>{
       let keyA = a[0]
        let keyB = b[0]
        return keyA.localeCompare(keyB)
    })
    for (let el of sorted){
        console.log(`${el[0]} -> ${el[1]}`)
    }
}
phoneBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)