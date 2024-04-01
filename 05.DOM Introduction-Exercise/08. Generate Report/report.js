


function generateReport() {
    const fields = {
        'employee': -1,
        'department': -1,
        'status': -1,
        'dateHired': -1,
        'benefits': -1,
        'compensation': -1,
        'rating': -1
    };

    const outputElement = document.getElementById('output');
    const table = document.querySelector('table');

    let rowIndex = 0
    Array.from(table.querySelectorAll('thead th')).forEach(field => {
        let text = field.textContent.toLowerCase().trimEnd();
        let isChecked = field.querySelector('input').checked;

        fields[text] = isChecked ? rowIndex : -1;
        rowIndex++;
    })

    let selectedFields = Object.entries(fields).filter(field => field[1] >= 0)

    let selectedInformation = [];
    Array.from(table.querySelectorAll("tbody tr"))
    .forEach(row => {
        let rowData = row.querySelectorAll('td');

        let filteredRowDataByFields = {}

        for(const field of selectedFields){
            filteredRowDataByFields[field[0]] = rowData[field[1]].textContent;
        }

        selectedInformation.push(filteredRowDataByFields);
    })

    outputElement.textContent = JSON.stringify(selectedInformation,null,' ');

}