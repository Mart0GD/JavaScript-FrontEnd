const url = 'http://localhost:3030/jsonstore/gifts/';

document.getElementById('load-presents').addEventListener('click', (e) => loadPresents(e));
document.getElementById('add-present').addEventListener('click', (e) => addPresent(e));
document.getElementById('edit-present').addEventListener('click', (e) => editPresent(e));

function loadPresents(e){

    document.getElementById('gift-list').innerHTML = ''
    document.getElementById('edit-present').setAttribute('disabled','disabled')

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let presents = Object.values(data);

            presents.forEach(present => {
                createPresent(present);
            })

        })
        .catch(err => console.log(err));


}

function createPresent({_id, gift, for: forName, price}){

    //buttons
    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';

    const divButtonContainer = document.createElement('div');
    divButtonContainer.classList.add('buttons-container');

    divButtonContainer.appendChild(changeButton);
    divButtonContainer.appendChild(deleteButton);


    //content 

    const giftElement = document.createElement('p');
    giftElement.textContent = gift;

    const forNameElement = document.createElement('p');
    forNameElement.textContent = forName;

    const priceElement = document.createElement('p');
    priceElement.textContent = price;

    const divContent = document.createElement('div');
    divContent.classList.add('content');

    divContent.appendChild(giftElement);
    divContent.appendChild(forNameElement);
    divContent.appendChild(priceElement);

    const giftSockElement = document.createElement('div');
    giftSockElement.classList.add('gift-sock');

    giftSockElement.appendChild(divContent);
    giftSockElement.appendChild(divButtonContainer);
    giftSockElement.setAttribute('data-id', _id);

    document.getElementById('gift-list').appendChild(giftSockElement);

    // events

    changeButton.addEventListener('click', (e) => changePresent(e, {_id, gift, for: forName, price}));
    deleteButton.addEventListener('click', (e) => deletePresent(e, {_id, gift, for: forName, price}))
}

function addPresent(e){
    const gift = document.getElementById('gift').value;
    const forName = document.getElementById('for').value;
    const price =document.getElementById('price').value;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify({
            gift,
            for: forName,
            price
        })
    })
    .then(response => 
    {
        loadPresents();
        clearFields();
    })
    .catch(err => console.log(err));

   
}

function changePresent(e, present){
    let presentToChange = e.currentTarget.parentElement.parentElement;

    document.getElementById('gift-list').removeChild(presentToChange);
    populateFields(present.gift, present.for, present.price);

    document.getElementById('add-present').setAttribute('disabled', 'disabled');
    document.getElementById('edit-present').removeAttribute('disabled');
    document.getElementById('form').setAttribute('data-changed-present-id', present._id)
}


function editPresent(e){
    let currentID = document.getElementById('form').getAttribute('data-changed-present-id');

    const gift = document.getElementById('gift').value;
    const forName = document.getElementById('for').value;
    const price = document.getElementById('price').value;

    fetch(`${url}${currentID}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            gift,
            for: forName,
            price,
            _id: currentID
        })
    })
    .then(response => {
        loadPresents();
        document.getElementById('add-present').removeAttribute('disabled');
        document.getElementById('edit-present').setAttribute('disabled', 'disabled');
        clearFields();
    })
}

async function deletePresent(e, present){

    await fetch(`${url}${present._id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                return;
            }

            loadPresents();
        });

}

function clearFields(){
    document.getElementById('gift').value = '';
    document.getElementById('for').value = ''
    document.getElementById('price').value = '';
}

function populateFields(gift, forName, price){
    document.getElementById('gift').value = gift;
    document.getElementById('for').value = forName
    document.getElementById('price').value = price;
}