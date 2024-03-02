
function bookingCalc(peopleCount, groupType, day){

    let tax = 0
    let price = 0;

    if(groupType == "Students"){

        if(day == "Friday"){
            tax = 8.45;
        }
        else if(day == "Saturday"){
            tax = 9.80;
        }
        else if(day == "Sunday"){
            tax = 10.46;
        }
        
        price = peopleCount * tax;

        if(peopleCount >= 30){
            price -= (0.15 * price);
        }
    }
    else if(groupType == "Business"){

        if(day == "Friday"){
            tax = 10.90;
        }
        else if(day == "Saturday"){
            tax = 15.60;
        }
        else if(day == "Sunday"){
            tax = 16;
        }

        price = peopleCount * tax;

        if(peopleCount >= 100){
            price -= 10 * tax;
        }
    }
    else if(groupType == "Regular"){

        if(day == "Friday"){
            tax = 15;
        }
        else if(day == "Saturday"){
            tax = 20;
        }
        else if(day == "Sunday"){
            tax = 22.50;
        }

        price = peopleCount * tax;

        if(peopleCount >= 10 && peopleCount <= 20){
            price -= 0.05 * price;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`)
}

bookingCalc(40, "Regular", "Saturday");