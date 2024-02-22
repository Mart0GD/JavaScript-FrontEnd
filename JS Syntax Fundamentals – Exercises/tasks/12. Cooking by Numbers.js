
function cook(number, op1, op2, op3, op4, op5){
    number = Number.parseInt(number);

    const operations = [op1,op2,op3,op4,op5];
    
    for(let i = 0; i < operations.length; i++){

        let operation = operations[i];

        if(operation === "chop"){
            number /= 2;
        }
        else if( operation === "dice"){
            number = Math.sqrt(number);
        }
        else if( operation ==="spice"){
            number++;
        }
        else if( operation === "bake"){
            number *= 3;
        }
        else if( operation === "fillet"){
            number -= 0.2 * number;
        }

        console.log(number);
    }
}

cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');