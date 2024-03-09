
function solve(grade){

    console.log(decideGrade(grade));

}

function decideGrade(grade){
    grades = 
    [["Fail", 3], ["Poor", 3.5], ["Good", 4.5], ["Very good", 5.5], ["Excellent", 6.01]]

    for(const currentGrade of grades){
        if(grade < currentGrade[1]){
            if (grade < 3) {
                return `${currentGrade[0]} (2)`;
            }
            else{
                return `${currentGrade[0]} (${grade.toFixed(2)})`;
            }
            
        }
    }
}


solve(3.33);
solve(4.5);
solve(2.99);