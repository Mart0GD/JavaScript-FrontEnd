
function solve(input){

    let phoneBook = input.reduce((acc, element) => {
        let [name, phone] = element.split(' ');

        return {...acc, [name]: phone}
    }, [])

    for(const person in phoneBook){
        console.log(`${person} -> ${phoneBook[person]}`);
    }

    

}

solve(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])
