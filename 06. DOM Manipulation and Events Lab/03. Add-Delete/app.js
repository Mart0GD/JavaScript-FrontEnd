function addItem() {
    const itemsElement = document.getElementById('items');
    const newItem = document.getElementById('newItemText').value;

    let item = document.createElement('li');
    item.textContent = newItem;

    let deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.setAttribute('href', '#')
    deleteButton.addEventListener('click', (event) => {
        event.target.parentNode.remove()
    })

    item.appendChild(deleteButton);
    itemsElement.appendChild(item)
}