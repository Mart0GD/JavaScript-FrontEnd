window.addEventListener("load", solve);

function solve() {
  document.getElementById('add-btn').addEventListener('click', (e) => addContact());

  

function addContact()
{
  const name = document.getElementById('name').value;
  const phoneNumber = document.getElementById('phone').value;
  const category = document.getElementById('category').value;


  //buttons
  const editButton = document.createElement('button');
  editButton.classList.add('edit-btn');

  editButton.addEventListener('click', (e) => editContact(e));

  const saveButton = document.createElement('button');
  saveButton.classList.add('save-btn');

  saveButton.addEventListener('click', (e) => saveContact(e));

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');

  buttonsDiv.appendChild(editButton);
  buttonsDiv.appendChild(saveButton);

  //article

  const pName = document.createElement('p');
  const pPhone = document.createElement('p');
  const pCategory = document.createElement('p');

  pName.textContent = `name:${name}`;
  pPhone.textContent = `phone:${phoneNumber}`;
  pCategory.textContent = `category:${category}`;

  const articleElement = document.createElement('article');
  articleElement.appendChild(pName);
  articleElement.appendChild(pPhone);
  articleElement.appendChild(pCategory);

  // li

  const li = document.createElement('li');
  li.appendChild(articleElement);
  li.appendChild(buttonsDiv);

  document.getElementById('check-list').appendChild(li)
  clearFields();
}

function editContact(e){

  let liElement = e.currentTarget.parentElement.parentElement;

  let [name, phone, category] = Array.from(liElement.querySelectorAll('article p')).map(p => {
    let [text, info] = p.textContent.split(':');

    return info;
  })

  document.getElementById('name').value = name
  document.getElementById('phone').value = phone
  document.getElementById('category').value = category;

  document.getElementById('check-list').removeChild(liElement);
}

function saveContact(e){
  const liElement = e.currentTarget.parentElement.parentElement;

  document.getElementById('check-list').removeChild(liElement);

  liElement.removeChild(liElement.querySelector('.buttons'))
  
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('del-btn');

  deleteButton.addEventListener('click', (e) => {
    document.getElementById('contact-list').removeChild(e.currentTarget.parentElement);
  })

  liElement.appendChild(deleteButton);
  document.getElementById('contact-list').appendChild(liElement);

}

function clearFields(){
  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('category').value = '';
}
}