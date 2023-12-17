let a = prompt("enter a nunmber");
let b = prompt("enter a nunmber");
let c = prompt("enter a nunmber");


let res1 = a%10;
let res2 = b%10;
let res3 = c%10;


if (res1 === res2 && res1 === res3) {
    console.log(`${a} ${b} ${c} are have the same last digit`)
}else{
    console.log(`${a} ${b} ${c} are not having the same last digit`)
}
