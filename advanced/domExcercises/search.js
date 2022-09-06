function search() {
   let inputForm = document.getElementById('searchText').value;
   let listOfCities = Array.from(document.querySelectorAll('#towns li'));
   let match = document.getElementById('result');
   let counter = 0;

   for(let element of listOfCities){
      if(element.textContent.includes(inputForm)){
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         counter++;
      }else{
         element.style.fontWeight = 'normal';
         element.style.textDecoration = 'none';
      }
   }

   match.textContent = `${counter} matches found`
}
