function solve(number , array){

    let newArray = array.slice(0, number).reverse();

    console.log(newArray.join(" "));
}