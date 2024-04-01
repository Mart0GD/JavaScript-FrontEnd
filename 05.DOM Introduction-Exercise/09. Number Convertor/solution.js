function solve() {

    const convertToField = document.getElementById('selectMenuTo');

    addOption(convertToField, 'Hexadecimal', 'hexadecimal');
    addOption(convertToField, 'Binary', 'binary')

    const convertButton = document.querySelector('#container button');
    convertButton.addEventListener('click', convert);

    
    function addOption(parent, optionName, optionValue){
        
        const option = document.createElement('option');
        option.setAttribute('value', optionValue);
        option.textContent = optionName;
    
        parent.appendChild(option);
    }
    
    function convert(){
        const decimalNumber = Number(document.getElementById('input').value);
        const result = document.getElementById('result');
    
        const option = document.getElementById('selectMenuTo').value;
    
        switch(option){
            case 'binary':
                result.value = decimalNumber.toString(2);
            break;
            
            case 'hexadecimal':
                result.value = (decimalNumber.toString(16)).toUpperCase();
            break;
        
            default:
            break;
        }
    }
}
