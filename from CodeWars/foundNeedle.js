// recieves array, find something and print its position
function findNeedle(haystack){
if (haystack.includes("needle")){
    return `found the needle at position ${haystack.indexOf("needle")}` 
}
// or just: return `found the needle at position ${haystack.indexOf("needle")}`
}