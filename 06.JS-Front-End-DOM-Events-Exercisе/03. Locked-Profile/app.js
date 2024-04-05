function lockedProfile() {
    
    const openInfoText = 'Hide it';
    const closedInfoText = 'Show more';

    document.querySelector('#main').addEventListener('click', (e) => {

        if (
            e.target.tagName === 'BUTTON' 
            && e.target.textContent === closedInfoText
            && e.target.parentElement.querySelector("input[value=unlock]").checked) {
            const parent = e.target.parentElement;

            let hiddenInfo = parent.querySelector("div[id*='HiddenFields']")
            hiddenInfo.style.display = 'block';
            e.target.textContent = openInfoText;
        }
        else if (
            e.target.tagName === 'BUTTON' 
            && e.target.textContent === openInfoText
            && e.target.parentElement.querySelector("input[value=unlock]").checked) {
            const parent = e.target.parentElement;

            let hiddenInfo = parent.querySelector("div[id*='HiddenFields']")
            hiddenInfo.style.display = 'none';
            e.target.textContent = closedInfoText
        }
    })
}