function addItem() {
    let inputFieldValue = document.getElementById('newItemText').value;
    let ulElement = document.getElementById('items');
    let liTag = document.createElement('li');
    liTag.textContent = inputFieldValue;
    ulElement.appendChild(liTag);
}