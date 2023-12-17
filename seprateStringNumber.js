const arrList = ['asdsd', 1 , 2 , 'b','d','e'];

let arrNum =[];
let arrAlp =[];


arrList.forEach(element => {
    if (typeof element === 'string') {
        arrAlp.push(element);
    }

    if (typeof element === 'number') {
        arrNum.push(element);
    }

}); 

console.log(arrAlp);
console.log(arrNum);