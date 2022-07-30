function fancyBarcodes(input) {
    let number = Number(input.shift())
    let regEx = /(@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])\1/
    
    for (let i = 0; i < number; i++) {
        let text = input[i]
        let executable = regEx.exec(text);
        if (executable === null) {
            console.log('Invalid barcode');
        } else {
            let arr = []
            let printBarcode = []
            let barcode = executable[2]
            arr.push(barcode)
            
            for (let element of arr) {
                let buff = ""
                let splited = element.split("");
                for (let i = 0; i < splited.length; i++) {
                    if (!isNaN(Number(splited[i]))) {
                        buff += splited[i]
                    }

                }
                if (buff.length === 0) {
                    buff = "00"
                }
                printBarcode.push(buff)
            }
            console.log(`Product group: ${printBarcode[0]}`)
        }



    }



}
fancyBarcodes((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])

)