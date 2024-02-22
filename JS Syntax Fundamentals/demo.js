'use strict';

//#region variables
const cannotChange = 8;
let canChange = 2;
var oldNutCool = 2; 

if(canChange >= oldNutCool){
    var iCanSeeItEverywhere = 33333;
    let iCanSeeItOnlyHere = 66666;
}

try{
    console.log(iCanSeeItOnlyHere); // not defined
    cannotChange = 3;
}
catch(Exception){
    console.log("iCanSeeItOnlyHere is not defined")
    console.log("cannotChange cannot change xD")
}

console.log(iCanSeeItEverywhere);
//#endregion

//#region truthy or falsy

// a variable is falsy when it is false, null, undefined, NaN, 0, 0n or ""

class Car{

    number;
    paint;

    Car(number, paint){
        this.number = number;
        this.paint = paint;
    }

    Car(){

    }
}

let grigorqn;
let car = new Car();

console.log(isTruthyOrFalsy(false)) //nuber
console.log(isTruthyOrFalsy()) //null
console.log(isTruthyOrFalsy(grigorqn)) //undefined
console.log(isTruthyOrFalsy(NaN)) //NaN
console.log(isTruthyOrFalsy(0)) //number is zero
console.log(isTruthyOrFalsy(0n)) //bigInt number is zero
console.log(isTruthyOrFalsy("")) //empty string

function isTruthyOrFalsy(val){
    if(val) return "truthy"
    else return "falsy";
}

//#endregion

//#region operators

let numberInt = 2;
let numberString = "2";

if(numberInt == numberString){ // comparison by value
    console.log("same because of parsing")
} 
if(numberInt != numberString){ // comparison by value
    console.log("won't come here")
}
if(numberInt === numberString){ // coparison by type and value
    console.log("now it won't come here")
}
if(numberInt !== numberString){
    console.log("will come here because they are diffrent");
}

//#endregion