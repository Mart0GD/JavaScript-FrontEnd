function solve() {
  const table = document.querySelector('.table tbody');
  const generateButton = document.querySelector('#exercise button')
  const buyButton = document.querySelector('#exercise button:last-of-type')
  
  generateButton.addEventListener('click', (e) => createItem(table))
  buyButton.addEventListener('click', (e) => buyItems(table));

}

function createItem(table){
  const inputs = JSON.parse(document.querySelector('#exercise textarea').value);

  for (const [index, input] of Object.entries(inputs)) {
    const tr = document.createElement('tr');
    
    const imageTD = document.createElement('td');
    
    const image = document.createElement('img');
    image.setAttribute('src', input.img);
    imageTD.appendChild(image);
    
    const nameTD = document.createElement('td');
    
    const name = document.createElement('p');
    name.textContent = input.name;
    nameTD.appendChild(name);
    
    const priceTD = document.createElement('td');
    
    const price = document.createElement('p');
    price.textContent = input.price;
    priceTD.appendChild(price);
    
    const decFactorTD = document.createElement('td');
    
    const decFactor = document.createElement('p');
    decFactor.textContent = input.decFactor;
    decFactorTD.appendChild(decFactor);
    
    const markTD = document.createElement('td');
    
    const mark = document.createElement('input');
    mark.setAttribute('type', 'checkbox');
    markTD.appendChild(mark);
    
    tr.appendChild(imageTD);
    tr.appendChild(nameTD);
    tr.appendChild(priceTD);
    tr.appendChild(decFactorTD);
    tr.appendChild(markTD);
    
    table.appendChild(tr);
  }
}

function buyItems(table){
  let boughtFurniture = Array.from(table.querySelectorAll('tr td:last-of-type input:checked')).map(x => x.parentElement.parentElement);
  let textAreaToPrint = document.querySelector('#exercise textArea:last-of-type')

  textAreaToPrint.value = '';

  let names = [];
  let price = 0;
  let averageDecFac = 0;
  for(const furnitureElement of boughtFurniture){

    names.push(furnitureElement.children.item(1).textContent);
    price += Number(furnitureElement.children.item(2).textContent);
    averageDecFac += Number(furnitureElement.children.item(3).textContent);
  }

  textAreaToPrint.value += `Bought furniture: ${names.join(', ')}\n`;
  textAreaToPrint.value += `Total price: ${price.toFixed(2)}\n`;
  textAreaToPrint.value += `Average decoration factor: ${averageDecFac / names.length}`
}