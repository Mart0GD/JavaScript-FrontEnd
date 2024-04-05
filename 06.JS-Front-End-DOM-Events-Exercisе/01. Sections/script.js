function create(words) {
   const content = document.getElementById('content');

   for(const word of words){
      content.appendChild(createSection(word));
   }

   content.addEventListener('click', (e) => {
      if (e.target.tagName === "DIV") {
         let pElement = e.target.querySelector('p');

         pElement.style.display = 'block';
      }
   })

   
}

function createSection(word){

   let div = document.createElement('div');
   let p = document.createElement('p');
   p.textContent = word;
   p.style.display = 'none';

   div.appendChild(p);

   return div
}