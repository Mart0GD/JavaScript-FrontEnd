function solve() {
    const url = 'http://localhost:3030/jsonstore/bus/schedule/';
    const firstStop = 'depot'

    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    const stopInfo = document.querySelector('.info');

    let nextStop = firstStop;
    function depart() {
        fetch(`${url}${nextStop}`)
            .then(response => response.json())
            .then(data => {
                departButton.setAttribute('disabled', true);
                arriveButton.removeAttribute('disabled');

                stopInfo.textContent = `Next stop ${data.name}`;
            })
    }

    async function arrive() {
        fetch(`${url}${nextStop}`)
            .then(response => response.json())
            .then(data => {
                departButton.removeAttribute('disabled');
                arriveButton.setAttribute('disabled', true);

                stopInfo.textContent = `Arriving at ${data.name}`;
                nextStop = data.next;
            })
            .catch(err => {
                error();
            })
    }

    function error(){
        stopInfo.textContent = 'Error'
        departButton.setAttribute('disabled', true);
        arriveButton.setAttribute('disabled', true);
    }

    return {
        depart,
        arrive
    };
}

let result = solve();