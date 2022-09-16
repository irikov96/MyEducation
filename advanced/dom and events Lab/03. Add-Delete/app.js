function addItem() {

    let inputFieldValue = document.getElementById('newItemText').value;

    let itemsList = document.getElementById('items');
    let liTag = document.createElement('li');

    liTag.textContent = inputFieldValue;

   
    
    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';

    deleteElement.addEventListener('click', (e)=>{
        e.currentTarget.parentNode.remove();
    });
    
    liTag.appendChild(deleteElement);
    
    itemsList.appendChild(liTag);
}