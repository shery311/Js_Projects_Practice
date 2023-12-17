let a = 0, b = 1;

let value = prompt('Enter a number');

for (let i = 0; i <= value; i++) {
    let temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
}
// Fibonacci sequence