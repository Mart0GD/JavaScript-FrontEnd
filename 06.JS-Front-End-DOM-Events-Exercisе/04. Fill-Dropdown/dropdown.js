function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');

    const newOption = document.createElement('option');
    newOption.textContent = newItemText.value;
    newOption.value = newItemValue.value;

    document.querySelector('#menu').appendChild(newOption)
    newItemText.value = '';
    newItemValue.value = '';
}