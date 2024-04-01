function solve(){
  const text = document.getElementById('text').value.toLowerCase().split(' ');
  const namingConvention = document.getElementById('naming-convention').value;   
  const result = document.getElementById('result');

  let toPascalCase = (textToConvert) => {
      let finalText = [];

      textToConvert.forEach(word => {
          finalText.push(word.replace(word.charAt(0), word.charAt(0).toUpperCase()));
      })

      return finalText
  }
  if(text.filter(x => x != '').length > 0){
      switch(namingConvention){
          case 'Pascal Case':   
              result.innerText = toPascalCase(text).join('');
          break;  
  
          case 'Camel Case':   
              let toPascal = toPascalCase(text).join('');
              result.innerText = toPascal.replace(toPascal.charAt(0), toPascal.charAt(0).toLowerCase())
          break;
  
          default:
              result.innerText = 'Error!';
          break;
      }
  }
  else{
      result.innerText = 'Error!';
  }

}
  