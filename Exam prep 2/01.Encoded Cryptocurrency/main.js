
function solve(input){

    let message = input[0];
    const commands = input.splice(1);
    
    let currentCommand = commands.shift();
    while (currentCommand != 'Buy') {
        let [command, substring, replacement] = currentCommand.split('?');

        switch (command) {

            case 'TakeEven':
                let newMessage= '';
                
                for(let i= 0; i < message.length; i++){
                    newMessage += i % 2 == 0 ? message[i] : '';
                }

                message = newMessage;
            break;
            
            case 'ChangeAll':

                message = myReplaceAll(message,substring,replacement);
            break;

            case 'Reverse':
                let regex = `${substring}`

                if (message.includes(substring)) {
                    message = message.replace(new RegExp(regex), '');
                    message += substring.split('').reverse().join("");
                }
                else{
                    console.log('error');
                    currentCommand = commands.shift();
                    continue;
                }
            break;
        }

        console.log(message);
        currentCommand = commands.shift();
    } 

    console.log(`The cryptocurrency is: ${message}`);
}

function myReplaceAll(message,substring, replacement){
        
    while (message.includes(substring)) {
        message = message.replace(substring, replacement);
    }

    return message
}

solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",

"TakeEven",

"Reverse?!nzahc",

"ChangeAll?m?g",

"Reverse?adshk",

"ChangeAll?z?i",

"Buy"]))