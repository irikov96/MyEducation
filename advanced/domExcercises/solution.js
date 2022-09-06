
// this function changes the class of the row in a given table when searching through the search field. On every click of the search bttn it clears the value of the button and marks the row. 
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let input = document.getElementById('searchField');
   let rows = document.querySelectorAll('tbody tr');
   
   function onClick() {
      for (let element of rows){
         element.classList.remove('select');

         if(input.value !== '' && element.innerHTML.includes(input.value)){
            element.className = 'select';
         }
      } 
      input.value = '';

   }
}