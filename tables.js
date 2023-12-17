const num = prompt("please enter a table number");

const table = () => {
    for (let i = 1; i <= 10; i++) {
       
        let response =  num * i;
        console.log(`${num} x ${i} = ${response}`);
        
    }

}
table(num);
