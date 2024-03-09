
function solve(password){

    const lenghtCheck = (pass) => pass.length >= 6 && pass.length <= 10 ? true : false;
    const constraintsCheck = (pass) => {
        let digits = pass.match(/[0-9]/g) == null ? 0 :  pass.match(/[0-9]/g).length;
        let letters = pass.match(/[a-zA-Z]/g) == null ? 0 :  pass.match(/[a-zA-Z]/g).length;

        return digits + letters == pass.split("").length ? true : false;;
    }
    const digitsCheck = (pass) => pass.match(/[0-9]/g) != null && pass.match(/[0-9]/g).length >= 2;

    const conditions = [
        [lenghtCheck, "Password must be between 6 and 10 characters"],
        [constraintsCheck, "Password must consist only of letters and digits"],
        [digitsCheck, "Password must have at least 2 digits"]
    ]

    let isValid = true;
    for (const condition of conditions) {
        
        if (!condition[0](password)) {
            console.log(condition[1]);
            isValid = false;
        }
    }

    if (isValid) {
        console.log("Password is valid");
    }
}

solve('Pa$s$s');