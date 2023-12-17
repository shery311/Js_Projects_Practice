let num1 = prompt("please enter 1st number");
let num2 = prompt("please enter 2nd number");
let calc = prompt("please select from +,-,/,*");


switch (calc) {
    case "+":
        let res = Number(num1) + Number(num2);
        console.log(`${num1} + ${num2} = ${res}`);
        break;
    case "-":
            let res1 = num1 - num2;
            console.log(`${num1} - ${num2} = ${res1}`);
            break;
    case "/":
        let res2 = num1 / num2;
        console.log(`${num1} / ${num2} = ${res2}`);
        break;
    case "*":
        let res3 = num1 * num2;
        console.log(`${num1} * ${num2} = ${res3}`);
        break;
    default:
        console.log("invalid operator");
        break;
}