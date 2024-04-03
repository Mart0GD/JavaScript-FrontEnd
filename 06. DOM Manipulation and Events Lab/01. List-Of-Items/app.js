function addItem() {
    const items = document.getElementById('items');
    const newItem = document.getElementById('newItemText').value;

    let ItemToAdd = document.createElement('li');
    ItemToAdd.textContent = newItem;

    items.appendChild(ItemToAdd);
}