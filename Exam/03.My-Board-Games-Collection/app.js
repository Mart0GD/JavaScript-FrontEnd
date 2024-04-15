
const url = 'http://localhost:3030/jsonstore/games/';

document.getElementById('load-games').addEventListener('click', (e) => loadGames(e));
document.getElementById('add-game').addEventListener('click', (e) => addGame(e));
document.getElementById('edit-game').addEventListener('click', (e) => editGame(e));

function loadGames(e){

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const gamesContainer = document.getElementById('games-list');
            gamesContainer.innerHTML = ''

            Object.values(data).forEach(game => {
                gamesContainer.appendChild(bulidGame(game));
            })
        })
        .catch(err => console.log(err));
}

function addGame(e){
    const name  = document.getElementById('g-name').value;
    const type = document.getElementById('type').value;
    const players = document.getElementById('players').value;
    const id = e.currentTarget.parentElement.parentElement.getAttribute('data-game-id');

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            type,
            players,
            _id : id
        })
    })
    .then(response => {
        loadGames();
        clearFields();
    })
}

function bulidGame({name, type, players, _id}){

    //buttons
    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change'

    changeButton.addEventListener('click', (e) => changeGame(e, {name, type, players, _id}));

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', (e) => deleteGame(e));

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons-container');

    buttonsDiv.appendChild(changeButton);
    buttonsDiv.appendChild(deleteButton);

    //article

    const pName = document.createElement('p');
    const pPlayers = document.createElement('p');
    const pType = document.createElement('p');

    pName.textContent = name;
    pPlayers.textContent = players;
    pType.textContent = type;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('content');

    infoDiv.appendChild(pName);
    infoDiv.appendChild(pPlayers);
    infoDiv.appendChild(pType);

    // container

    const boardGameElement = document.createElement('div');
    boardGameElement.classList.add('board-game')
    boardGameElement.setAttribute('data-game-id', _id);

    boardGameElement.appendChild(infoDiv);
    boardGameElement.appendChild(buttonsDiv);

    return boardGameElement;
}

function changeGame(e, object){
    document.getElementById('g-name').value = object.name;
    document.getElementById('type').value = object.type;
    document.getElementById('players').value = object.players;

    document.getElementById('games-list').removeChild(e.currentTarget.parentElement.parentElement);
    document.getElementById('form').setAttribute('data-current-game-id', object._id);
    document.getElementById('add-game').disabled = true;
    document.getElementById('edit-game').disabled = false;
}

function editGame(e){
    const name = document.getElementById('g-name').value;
    const type = document.getElementById('type').value;
    const players = document.getElementById('players').value;
    const _id = document.getElementById('form').getAttribute('data-current-game-id');

    fetch(`${url}${_id}`, {
        method: "PUT",
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            name,
            type,
            players,
            _id
        })
    })
        .then(response => {
            loadGames();
            clearFields();
            document.getElementById('add-game').disabled = false;
            document.getElementById('edit-game').disabled = true;
        })
}

function deleteGame(e){

    const _id = e.currentTarget.parentElement.parentElement.getAttribute('data-game-id');
    fetch(`${url}${_id}`, {
        method: "DELETE"
    })
        .then(response => {
            loadGames();
        })
}

function clearFields(){
    document.getElementById('g-name').value = '';
    document.getElementById('type').value = '';
    document.getElementById('players').value = '';
}
