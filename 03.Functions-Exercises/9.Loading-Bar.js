
function solve(percentage){

    const generateLoadingBar = (progress) => '[' + '%'.repeat(progress / 10) + '.'.repeat(10 - (progress / 10)) + ']';

    console.log(`${percentage}% ${generateLoadingBar(percentage)}`);
    console.log(percentage === 100 ? "Complete!" : "Still loading...");
}

solve(50);
solve(100);