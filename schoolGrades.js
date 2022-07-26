function schoolGrades(input){
let map = new Map()
for(let el of input){
    let splitted = el.split(" ")
    let name = splitted[0]
    let sum = 0
    for( let i = 1; i<splitted.length; i++){
        sum+= Number(splitted[i])
    }
    let avg = sum / (splitted.length-1)
    if(!map.has(name)){
        map.set(name,avg)
    }else{
        let currAvg = map.get(name)
        let newAvg = (avg+currAvg)/2
        map.set(name,newAvg)
    }    
}
let inArray = Array.from(map.entries()).sort((a,b) =>{
    return a[0].localeCompare(b[0])
})
for(let element of inArray){
    console.log(`${element[0]}: ${element[1].toFixed(2)}`);
}
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])