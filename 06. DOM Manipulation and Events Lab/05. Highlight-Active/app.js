function focused() {
    const fields = document.querySelectorAll('div div input[type=text]');

    Array.from(fields).forEach(field => {
        field.addEventListener('focus', (e) => {
            e.target.parentElement.setAttribute('class', 'focused');
        })

        field.addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove('focused');
        })
    }) 
}