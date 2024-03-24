

function solve(input){
    let courses = [];

    for(const row of input){
        const addCourseCommand = ": ";
            
        if (row.includes(addCourseCommand)) {
            let [courseName, capacity] = row.split(addCourseCommand);

            let existingCourse = courses.find(x => x.courseName === courseName);
            if(existingCourse){
                existingCourse.capacity += Number(capacity);
                continue;
            }   

            let course = {
                courseName,
                capacity: Number(capacity),
                students: []
            }

            courses.push(course);
        }
        else{
            let userTokens = row.split(" ");

            let user = userTokens[0];

            let userName = user.split(/\[.*\]/)[0];
            let credits = user.match(/\[(?<credits>.*)\]/).groups.credits;
            let email = userTokens[3];
            let courseName = userTokens[userTokens.length - 1]

            let course = courses.find(course => course.courseName === courseName)

            if (course && course.students.length < course.capacity) {
                course.students.push({
                    userName,
                    credits,
                    email,
                })
            }
        }
        
    }

    courses.sort((a, b) => b.students.length - a.students.length).forEach(course => {
        console.log(`${course.courseName}: ${course.capacity - course.students.length} places left`);

        for(const student of course.students.sort((a, b) => b.credits - a.credits)){
            console.log(`--- ${student.credits}: ${student.userName}, ${student.email}`);
        }
    })
}

    


solve(['JavaBasics: 2',
'user1[25] with email user1@user.com joins C#Basics',
'C#Advanced: 3',
'JSCore: 4',
'user2[30] with email user2@user.com joins C#Basics',
'user13[50] with email user13@user.com joins JSCore',
'user1[25] with email user1@user.com joins JSCore',
'user8[18] with email user8@user.com joins C#Advanced',
'user6[85] with email user6@user.com joins JSCore',
'JSCore: 2',
'user11[3] with email user11@user.com joins JavaBasics',
'user45[105] with email user45@user.com joins JSCore',
'user007[20] with email user007@user.com joins JSCore',
'user700[29] with email user700@user.com joins JSCore',
'user900[88] with email user900@user.com joins JSCore']);
console.log("--------------");
solve(['JavaBasics: 15',
'user1[26] with email user1@user.com joins JavaBasics',
'user2[36] with email user11@user.com joins JavaBasics',
'JavaBasics: 5',
'C#Advanced: 5',
'user1[26] with email user1@user.com joins C#Advanced',
'user2[36] with email user11@user.com joins C#Advanced',
'user3[6] with email user3@user.com joins C#Advanced',
'C#Advanced: 1',
'JSCore: 8',
'user23[62] with email user23@user.com joins JSCore'])