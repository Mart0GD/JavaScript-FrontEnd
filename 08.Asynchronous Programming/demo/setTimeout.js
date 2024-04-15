
//#region SetTimeout

console.log(`the answer is ${calculateBoringStuff(1, 2)}`)
calculateBoringStuffSlower(1, 2);
function calculateBoringStuff(num1, num2) {
    return num1 + num2
}
function calculateBoringStuffSlower(num1, num2) {
    setTimeout(function () {
        console.log(`the answer is ${num1 + num2} but slower`)
    }, 100)
}
// making a loop with setTimeout 
pretendToCalculate(5,4);
function pretendToCalculate(num1, num2) {
    setTimeout(function() {think(1,num1,num2)}, 10000)
}
function think(index, num1, num2) {
    if (index === 5) {
        console.log(`the answer is ${num1 + num2}`);
        return;
    }
    console.log("thinking.....");
    index++;
    setTimeout(function() {think(index,num1,num2)}, 5000)
}

//#endregion



    
