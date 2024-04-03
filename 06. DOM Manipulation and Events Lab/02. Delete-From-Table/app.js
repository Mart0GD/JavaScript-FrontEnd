function deleteByEmail() {
    const trElements = document.querySelectorAll('#customers tbody tr');
    const emailInput = document.querySelector('label input[name=email]').value;
    const result = document.querySelector('#result');

    let foundMatch = false;
    Array.from(trElements).forEach(tr => {
        let [name, email] = tr.querySelectorAll('td');

        if (email.textContent === emailInput) {
            result.textContent = "Deleted.";
            foundMatch = true;
            tr.remove();
            return;
        }
    })

    if (!foundMatch) {
        result.textContent = "Not found.";
    }
}