function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const selectedClassName = 'select';

      const searchData = document.getElementById('searchField').value;
      const tableRows = document.querySelectorAll('.container tbody tr');
      
      for(const row of tableRows){
         let dataElements = row.querySelectorAll('td');
         row.classList.remove(selectedClassName)

         let isSelected = false;
         for(const element of dataElements){

            if (element.textContent.toLowerCase().includes(searchData.toLowerCase())) {
               isSelected = true;
               break;
            }
         };

         if (isSelected) {
            row.className = selectedClassName;
         }
      }
   }
}