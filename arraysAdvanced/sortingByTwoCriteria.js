function sortingByTwo(array){
    let sorted = array.sort((a,b) =>{
    return a.length - b.length ||a.localeCompare(b)})
    sorted.forEach(el => {
        console.log(el)
    })
}
sortingByTwo(['alpha', 'beta', 'gamma'])