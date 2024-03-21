
function solve(input){

   let meetings = {};

   input.forEach(x => {

    let [day, name] = x.split(" ")

    if(meetings.hasOwnProperty(day)){
        console.log(`Conflict on ${day}!`);
    }
    else{
        console.log(`Scheduled for ${day}`)
        meetings[day] = name;
    }
   })

   Object.entries(meetings).forEach(([day, name]) =>{
    console.log(`${day} -> ${name}`)
   })

}
solve(['Monday Peter','Wednesday Bill', 'Monday Tim', 'Friday Tim'])