function validate() {

    const validator = /[a-z]+@[a-z]+\.[a-z]+/g;
    document.getElementById('email').addEventListener('change', (e) => {
        
        if (!validator.exec(e.target.value)) {
            e.target.setAttribute('class', 'error');
        }
        else{
            e.target.classList.remove('error');
        }
    })
}