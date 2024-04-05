function attachEventsListeners() {

    let convertToSeconds = (timeType, time) => {
        switch (timeType) {
            case 'seconds':
                return time;
            
            case 'minutes':
                return time * 60;
            
            case 'hours':
                return time * (60**2);

            case 'days':
                return time * 24 * (60**2);
            default:
                break;
        }
    }

    for(const button of document.querySelectorAll('div input[type=button]')){
        button.addEventListener("click", (e) => {

            let timeType = e.target.parentElement.querySelector('input[type=text]').getAttribute('id');
            let time = Number(e.target.parentElement.querySelector('input[type=text]').value);

            let seconds = convertToSeconds(timeType, time);

            fillFields(seconds);
        })
    }

    
function fillFields(seconds){
    const fields = document.querySelectorAll('div input[type=text]');

    let toNTimeType = (timeType, seconds) => {
        switch (timeType) {
            case 'seconds':
                return seconds;
            
            case 'minutes':
                return seconds / 60;
            
            case 'hours':
                return seconds / (60**2);

            case 'days':
                return seconds / 24 / (60**2);
            default:
                break;
        }
    }

    for(const field of fields){
        let timeType = field.getAttribute('id');

        field.value = toNTimeType(timeType,seconds)
    }
}
}
