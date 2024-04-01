function toggle() {
    const clickedButtonText = 'Less';
    const nonClickedButtonText = 'More';

    let extraElement = document.getElementById('extra');
    let buttonElement = document.querySelector('.button');

    extraElement.style.display = buttonElement.textContent === nonClickedButtonText ?
    'block' : 'none' ;
    
    buttonElement.textContent = buttonElement.textContent === nonClickedButtonText ?
    clickedButtonText : nonClickedButtonText;

    
}