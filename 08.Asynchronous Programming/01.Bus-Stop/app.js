function getInfo() {
    const url = 'http://localhost:3030/jsonstore/bus/businfo/'
    const stopID = document.getElementById('stopId').value;

    const stopNameElement = document.getElementById('stopName');
    const bussesListElement = document.getElementById('buses')
    
    fetch(`${url}${stopID}`)
        .then(response => response.json())
        .then(data => {
            clearBuses();

            stopNameElement.textContent = data.name;
            Object.entries(data.buses).forEach(([bus, minutes]) => {
                let li = document.createElement('li');

                li.textContent = `Bus ${bus} arrives in ${minutes} minutes`;
                bussesListElement.appendChild(li);
            })
        })
        .catch(err => {
            clearBuses();
            stopNameElement.textContent = "Error";
        })

    function clearBuses(){
        bussesListElement.innerHTML = ''
    }
}