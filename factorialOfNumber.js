let number = prompt("please enter a number");

let factorial = 1;

if (number == 0) {
    console.log(`The factorial of the ${number} is 1`);
}else if (number < 0) {
    console.log(`The factorial of the ${number} is not negative`);
}else{
    for (let i = 1; i <= number; i++) {
       factorial *= i;
       console.log(`The factorial of the ${number} is ${factorial}`);
    }
}
