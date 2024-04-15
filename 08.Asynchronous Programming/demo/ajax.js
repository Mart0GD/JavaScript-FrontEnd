
const starWarsUrl = 'https://swapi.py4e.com/api/';

fetch(`${starWarsUrl}/people/1/`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log("something went wrong"));

// local server 

const localUrl = ' http://localhost:3030/jsonstore'

// create book
fetch(`${localUrl}/books`, {
    method: "POST",
    headers: {
        'content-type' : 'application/json'
    },
    body : JSON.stringify({
        title: 'how to cook',
        author: 'Uti Bachvarov'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(console.log("something went wrong!"))