let number = prompt("Choose a number to factorize");
let factorized = 1;

for (let i = 1; i <= number; i++) {
    factorized = factorized * i
}

console.log(number + "! is :  " + factorized)