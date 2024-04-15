//#region Promise
console.log("will you be my GF");
const somePromise = new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
        setTimeout(function() {
            console.log("thinking");
            setTimeout(function() {
                resolve("GET REJECTED")
            }, 2000)
        }, 1000)
        return;
    }

    setTimeout(function() {
        console.log("thinking");
        setTimeout(function() {
            resolve("YESSS!!!")
        }, 2000)
    }, 1000)
})

somePromise
.then((message => console.log(message)))
.catch(message => console.log(message))

// always rejecting 

const rejection = Promise.reject("HHAHHAHHAHA");

rejection.catch(rejection => console.log(rejection));


//promise all

const createPromise = function(message, time){
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            resolve(message);
        }, time)
    })
}

const groupOfPromises = Promise.all([
    createPromise("firstOne", 1000),
    createPromise('secondOne', 2000),
    createPromise('thirdOne', 3000),
    Promise.reject('rejection')
])

groupOfPromises
.then((values) => console.log(values))
.catch(errors => console.log(errors + " ERROR!!!"))

//#endregion