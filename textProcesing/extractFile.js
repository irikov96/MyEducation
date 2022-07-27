/*Write a function that receives a single string - the path to a file (the '\' character is escaped)
Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).
*/
function extractFile(input){
// first split the input to get array
    let splittedData = input.split("\\");
// file name is always the last element of the splittedData array
    let fileNameArray = splittedData[splittedData.length-1].split(".");
// the extention is always the last element of the fileName array and the File name is the rest of the elements
    let extension = fileNameArray.pop()
    let fileName = fileNameArray.join(".")
   
        console.log(`File name: ${fileName} `);
        console.log(`File extension: ${extension}`);
   

}
extractFile('C:\\Internal\\training-internal\\Template.bak.gpg.php.pptx');