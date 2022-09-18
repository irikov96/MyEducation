// fucntion recieves array of strings. You should place every string in a p tag inside of a div element on the DOM

function create(input) {
   let parentDiv = document.getElementById('content');
   let elements = input;
   
   for(let i = 0; i < elements.length; i++){
      
      let pTag = document.createElement('p');
      let div = document.createElement('div');

      let currentText=document.createTextNode(elements[i]);
      
      pTag.appendChild(currentText);
      
      pTag.style.display = 'none';
      div.appendChild(pTag);
      
      div.addEventListener('click', (e)=>{
         e.target.children[0].style.display = 'block';
      })
      parentDiv.appendChild(div);
   }
}