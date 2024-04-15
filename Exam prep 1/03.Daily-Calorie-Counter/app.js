const url = 'http://localhost:3030/jsonstore/tasks/';

document.getElementById('load-meals').addEventListener('click', (e) => loadMeals(e));
document.getElementById('add-meal').addEventListener('click', (e) => addMeal(e));
document.getElementById('edit-meal').addEventListener('click', (e) => editMeal(e));

function loadMeals(e){

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('list');
            list.innerHTML = ''

            for(const id in data) {
                list.appendChild(createMeal(data[id]));
            }
        })
}

function createMeal({food, calories, time, _id}){

    // buttons
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-meal');
    changeButtonElement.textContent = 'Change';

    changeButtonElement.addEventListener('click', (e) => changeMeal(e));

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-meal');
    deleteButtonElement.textContent = 'Delete';

    deleteButtonElement.addEventListener('click', (e) => deleteElement(e));

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.id = 'meal-buttons';

    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);

    //headers
    const h2FoodElement = document.createElement('h2');
    h2FoodElement.textContent = food;
    const h3TimeElement = document.createElement('h3');
    h3TimeElement.textContent = time;
    const h3CaloriesElement = document.createElement('h3');
    h3CaloriesElement.textContent = calories;

    //meal
    const mealDivElement = document.createElement('div');
    mealDivElement.classList.add('meal');
    mealDivElement.setAttribute('data-id', _id);

    mealDivElement.appendChild(h2FoodElement);
    mealDivElement.appendChild(h3TimeElement);
    mealDivElement.appendChild(h3CaloriesElement);
    mealDivElement.appendChild(buttonsDivElement);

    return mealDivElement;
}

function addMeal(e){

    const food = document.getElementById('food').value;    
    const time = document.getElementById('time').value;
    const calories = document.getElementById('calories').value;    

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            food,
            time,
            calories
        })
    })
        .then(response => {
            loadMeals();
            clearFields();
        })
}

function changeMeal(e){

    const meal = e.currentTarget.parentElement.parentElement;
    [food,time,calories] = Array.from(meal.querySelectorAll('h2,h3')).map(meal => meal.textContent);

    document.getElementById('food').value = food;    
    document.getElementById('time').value = time;
    document.getElementById('calories').value = calories; 

    document.getElementById('edit-meal').disabled = false;
    document.getElementById('add-meal').disabled = true;
    document.getElementById('form').setAttribute('data-current-meal-id', meal.getAttribute('data-id'));
    document.getElementById('list').removeChild(meal);
}

function editMeal(e){
    const food = document.getElementById('food').value;
    const time = document.getElementById('time').value;
    const calories = document.getElementById('calories').value;
    const mealID = document.getElementById('form').getAttribute('data-current-meal-id');
    fetch(`${url}${mealID}`, {
        method: "PUT",
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            food,
            time,
            calories,
            _id: mealID
        })
    })
        .then(response => {
            loadMeals();
            clearFields();
            document.getElementById('edit-meal').disabled = true;
            document.getElementById('add-meal').disabled = false;
        })
}

function deleteElement(e){

    let meal = e.currentTarget.parentElement.parentElement;
    let mealID = meal.getAttribute('data-id');

    fetch(`${url}${mealID}`, {
        method: "DELETE"
    })
        .then(response => {
            loadMeals();
        })
}

function clearFields(){
    document.getElementById('calories').value = '';
    document.getElementById('time').value = '';
    document.getElementById('food').value = '';    
}