function solve() {

    const rows = document.querySelectorAll('#exercise table tbody tr');
    const quickCheckButton = document.querySelector('#exercise tfoot button:first-of-type')
    const clearButton =  document.querySelector('#exercise tfoot button:last-of-type')
    
    quickCheckButton.addEventListener('click', (e) => {

        let result = checkSudomu(rows);

        if (result) {
            document.querySelector('#exercise table').style.border = '2px solid green';
            document.querySelector('#check p').textContent = "You solve it! Congratulations!";
            document.querySelector('#check p').style.color = "green";
        }
        else{
            document.querySelector('#exercise table').style.border = '2px solid red';
            document.querySelector('#check p').textContent = "NOP! You are not done yet...";
            document.querySelector('#check p').style.color = "red";
        }
    });

    clearButton.addEventListener('click', (e) => {
        Array.from(document.querySelectorAll('#exercise tbody td input')).forEach(x => x.value = '')
        document.querySelector('#exercise table').style.border = 'none';
        document.querySelector('#check p').textContent = "";
    })
    
    function checkSudomu(rows){

        //check rows
        for(let i = 0; i < rows.length; i++){
            let currentRow = Array.from(rows[i].querySelectorAll('td input')).map(x => x.value);
            let currentCol = Array.from(rows).map(row => row.children[i].querySelector('input').value)
    
            let rowSet = new Set(currentRow);
            let colSet = new Set(currentCol);
            let a = 0;
            
           if (currentRow.length != rowSet.size || currentCol.length != colSet.size) {
                return false
           }
        }
        return true;
    }
}

