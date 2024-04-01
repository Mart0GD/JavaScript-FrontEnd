function search() {
   const searchWord = document.getElementById("searchText").value;
   const townsElements = document.querySelectorAll("#towns li"); 
   const resultField = document.getElementById('result');

   let matches = 0;
   Array.from(townsElements).map(town => {

      if (town.textContent.toLowerCase().includes(searchWord.toLowerCase())) {
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold"
         matches++;
      }
      else{
         town.style.textDecoration = "none";
         town.style.fontWeight = "normal"
      }
   })


   resultField.textContent = `${matches} matches found`;
}
