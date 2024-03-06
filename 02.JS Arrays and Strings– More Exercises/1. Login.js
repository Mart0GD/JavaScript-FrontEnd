
function solve(input){

    const username = input[0];
    const password = Array.from(username).reverse().join("");

    const loginAttempts = input.slice(1, input.length)

    for( let i = 0; i < loginAttempts.length; i++){
       
        if(loginAttempts[i] === password){
            console.log(`User ${username} logged in.`)
        }
        else{
            if(i === 3){
                return console.log(`User ${username} blocked!`)
            }
            console.log("Incorrect password. Try again.");
        }
    }


}

solve(['sunny','rainy','cloudy','sunny','not sunny']);