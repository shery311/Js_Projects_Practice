//Control flow

//For loops

// Run the specific task 5 times

// for (let i = 1; i<=10;i++) {

//     console.log("run this task",i);
// }


//Use case of for loop

// let dishes = ['biryani', 'qeemah','chicken', 'mix sabzi']


// for (let i=0;i<dishes.length;i++) {
//     console.log(dishes[i]);
// }

//While Loop

// for (let i=0;i<=5;i++) {
//         console.log("for loop ", i);
//     }

//----------------------------- Continue Break statement ----------------

//Continue statement

// for (let i=0;i<=10;i++) {
//     if(i == 5){
//         continue; // move to next iteration
//     }
//     console.log("value of i =", i);
// }


//----------------------------- Logical Operator ----------------

// And &&, or ||, not ! 

// let pass = "querty@";

//  if(pass.length > 5 && pass.includes('@')){

//     console.log("Password is strong")
//  }else{
//     console.log("password is not strong")
//  }

//Ternary Operator (? :)

let age = 20;

let result = age > 21 ? "pass" : "fail";

console.log(result);