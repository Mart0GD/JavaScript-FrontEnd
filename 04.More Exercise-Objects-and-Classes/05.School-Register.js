
function solve(input){

    let students = getStudents(input).sort((a, b) => a.grade - b.grade);

    grades = {}
    for(const student of students){
        let grade = student.grade + 1;

        if (student.averageScore >= 3) {
            
        
            if (!grades.hasOwnProperty(grade)) {
                grades[grade] = {
                    students: [],
                    scores: []
                };
            }

            grades[grade].students.push(student.name);
            grades[grade].scores.push(student.averageScore);
        }
    }

    Object.entries(grades).forEach(grade => {
        [students, scores]  = Object.values(grade[1]);

        console.log(`${grade[0]} Grade`);
        console.log(`List of students: ${students.join(", ")}`);
        console.log(`Average annual score from last year: ${(scores.reduce((acc, score) => acc += Number(score), 0) / scores.length).toFixed(2)}`);
        console.log();
    })

    function getStudents(register){
        let students = register.map(student => {
            let [name, grade, averageScore] = student.split(", ");
    
            name = name.split(": ")[1];
            grade = grade.split(": ")[1];
            averageScore = averageScore.split(": ")[1];
            
            return {
                name,
                grade: Number(grade),
                averageScore
            }
        });
    
        return students;
    }
}



solve([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]);