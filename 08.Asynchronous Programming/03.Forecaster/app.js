function attachEvents() {
    const locationsURL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const currentConditionsURL = 'http://localhost:3030/jsonstore/forecaster/today/';
    const upcomingConditionsURL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';

    const iconDictionary = {
        Sunny: '☀',
        ['Partly sunny']: '⛅',
        Overcast: '☁',
        Rain: '☂',
        Degrees: '°'
    }

    document.getElementById('submit').addEventListener('click', (e) => {
        showWeather();
    })

    function showWeather(){
        const city = document.getElementById('location').value;
        let cityCode = '';

        fetch(`${locationsURL}`)
            .then(response => response.json())
            .then(data => {
                const currentForecast = document.getElementById('current');
                const uppcomingForecast = document.getElementById('upcoming');

                if (currentForecast.querySelector('.condition') !== null) {currentForecast.removeChild(currentForecast.querySelector('div:last-of-type'))};
                if (uppcomingForecast.querySelector('.forecast-info') !== null)  {uppcomingForecast.removeChild(uppcomingForecast.querySelector('div:last-of-type'))};

                data.forEach(obj => {
                    if (obj.name == city) {
                        cityCode = obj.code;
                        return;
                    }
                })

                if (cityCode == '') {
                    throw new Error();
                }

                fetch(`${currentConditionsURL}${cityCode}`)
                    .then(response => response.json())
                    .then(data => {
                        currentForecast.appendChild(createCurrentForcats(data));
                    });
                
                fetch(`${upcomingConditionsURL}${cityCode}`)
                    .then(response => response.json())
                    .then(data => {
                        
                        const forecastInfoDiv = document.createElement('div')
                        forecastInfoDiv.classList.add('forecast-info');

                        data.forecast.forEach(forecast => {
                            forecastInfoDiv.appendChild(createUpcommingForecast(forecast));
                        })

                        uppcomingForecast.appendChild(forecastInfoDiv);
                        document.getElementById('forecast').style.display = 'block';
                    })
            })
            .catch(err => error());
    }

    function error(){
        document.querySelector('#forecast #current div').textContent = 'Error';
        document.getElementById('forecast').style.display = 'block';
    }

    function createCurrentForcats({forecast, name}){
        
        // condition 
        const citySpan = document.createElement('span');
        citySpan.classList.add('forecast-data');
        citySpan.textContent = name;

        const tempSpan = document.createElement('span');
        tempSpan.classList.add('forecast-data');
        tempSpan.textContent = `${forecast.low}${iconDictionary['Degrees']}/${forecast.high}${iconDictionary['Degrees']}`;

        const conditionSpan = document.createElement('span');
        conditionSpan.classList.add('forecast-data');
        conditionSpan.textContent = forecast.condition;

        const forcastWrapper = document.createElement('span');
        forcastWrapper.classList.add('condition');

        forcastWrapper.appendChild(citySpan);
        forcastWrapper.appendChild(tempSpan);
        forcastWrapper.appendChild(conditionSpan);

        //symbol
        const spanSymbol = document.createElement('span');
        spanSymbol.textContent = iconDictionary[forecast.condition]
        spanSymbol.classList.add('condition');
        spanSymbol.classList.add('symbol')

        //div
        const forcastsDiv = document.createElement('div');
        forcastsDiv.classList.add('forcasts');

        forcastsDiv.appendChild(spanSymbol);
        forcastsDiv.appendChild(forcastWrapper);

        return forcastsDiv
    }

    function createUpcommingForecast({condition, high, low}){

        //spans 
        const spanSymbol = document.createElement('span');
        spanSymbol.textContent = iconDictionary[condition];
        spanSymbol.classList.add('symbol');

        const tempSpan = document.createElement('span');
        tempSpan.classList.add('forecast-data');
        tempSpan.textContent = `${low}${iconDictionary['Degrees']}/${high}${iconDictionary['Degrees']}`;

        const conditionSpan = document.createElement('span');
        conditionSpan.classList.add('forecast-data');
        conditionSpan.textContent = condition;

        //wrapper

        const spanWrapper = document.createElement('span');
        spanWrapper.classList.add('upcoming');

        spanWrapper.appendChild(spanSymbol);
        spanWrapper.appendChild(tempSpan);
        spanWrapper.appendChild(conditionSpan);

        return spanWrapper;
    }
}

attachEvents();