
//append new div element to tree
const divWrapper = document.createElement('div');
const divs = document.querySelectorAll('div:not(.content)');

divs.forEach(div => divWrapper.appendChild(div));

const contentDiv = document.querySelector('.content')
contentDiv.appendChild(divWrapper);

//append fragment to tree
const divs2 = document.querySelectorAll('div:not(.content)');
divWrapper.remove();

divFragment = document.createDocumentFragment();

divs.forEach(div => divFragment.appendChild(div));

contentDiv.appendChild(divFragment);