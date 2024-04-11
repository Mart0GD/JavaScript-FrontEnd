window.addEventListener("load", solve);

function solve(){
    //elements
    const taskList = document.getElementById('task-list');
    const doneList = document.getElementById('done-list');
    const location = document.getElementById('place');
    const action = document.getElementById('action');
    const person = document.getElementById('person');

    //buttons
    const addButtonElement = document.getElementById('add-btn');
    const editButtonElement = document.getElementById('');

    addButtonElement.addEventListener('click', (e) => {

        let task = document.createElement('li');
        task.classList.add('clean-task');
        task.innerHTML += CreateTask(location.value,action.value,person.value);
        
        taskList.appendChild(task);

        //#region edit

        const editButton = task.querySelector('.edit');
        editButton.addEventListener('click', (e) => {

            let li = task;

            let [curPlace,curAction,curPerson] = 
            Array.from(li.querySelectorAll('article p'))
            .map(p => {
                let [text,info] = p.textContent.split(':');

                return info;
            })

            location.value = curPlace;
            action.value = curAction;
            person.value = curPerson;
 
            taskList.removeChild(li);
        })
        //#endregion 

        //#region done
        const doneButton = task.querySelector('.done')

        doneButton.addEventListener('click', (e) => {
            const li = e.currentTarget.parentElement.parentElement;

            taskList.removeChild(li);

            li.removeChild(li.querySelector('.buttons'));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');

            deleteButton.addEventListener('click', (e) => {
                doneList.removeChild(li)
            })

            li.appendChild(deleteButton);
            doneList.appendChild(li);
        })
        //#endregion

        location.value = '';
        action.value = '';
        person.value = '';
    })
    function CreateTask(place,action,person){
        let task = 
    `
      <article>
        <p>Place:${place}</p>
        <p>Action:${action}</p>
        <p>Person:${person}</p>
      </article>
      <div class="buttons">
        <button class="edit">Edit</button>
        <button class="done">Done</button>
      </div>
    `;
    
        return task
    }

}

    