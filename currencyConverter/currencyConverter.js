const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll('.dropdown select');
const btn = document.querySelector('form button');
const fromCurr = document.querySelector('.from select');
const toCurr = document.querySelector('.to select');
const msg = document.querySelector('.msg');

//looping to select option
for(let select of dropdowns){
    for(let currCode in countryList) {
        let newOption  = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode === "PKR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
//adding event listen
    select.addEventListener("change", (evt) =>{
        updateFlag(evt.target);
    })
}

// fucntion to fetch flag for slecterd country

const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async(evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountValue = amount.value;
    if(amountValue === "" || amountValue < 1 ){
        amountValue = 1;
        amount.value = "1";
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    let finalAmount = amountValue * rate;
    msg.innerText = `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
})









// const BASE_URL: string = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// const dropdowns: NodeListOf<HTMLSelectElement> = document.querySelectorAll('.dropdown select');
// const btn: HTMLElement | null = document.querySelector('form button');
// const fromCurr: HTMLSelectElement | null = document.querySelector('.from select');
// const toCurr: HTMLSelectElement | null = document.querySelector('.to select');
// const msg: HTMLElement | null = document.querySelector('.msg');

// interface CountryList {
//   [key: string]: string;
// }

// const countryList: CountryList = {
//   // Add your country list here...
// };

// for (let select of Array.from(dropdowns)) {
//   for (let currCode in countryList) {
//     let newOption: HTMLOptionElement = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = true;
//     } else if (select.name === "to" && currCode === "PKR") {
//       newOption.selected = true;
//     }
//     (select as HTMLSelectElement).append(newOption);
//   }

//   (select as HTMLSelectElement).addEventListener("change", (evt) => {
//     updateFlag(evt.target as HTMLSelectElement);
//   });
// }

// const updateFlag = (element: HTMLSelectElement) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = (element.parentElement as HTMLElement).querySelector("img") as HTMLImageElement;
//   img.src = newSrc;
// };

// if (btn && fromCurr && toCurr && msg) {
//   btn.addEventListener("click", async (evt) => {
//     evt.preventDefault();
//     let amount: HTMLInputElement | null = document.querySelector(".amount input");
//     let amountValue: number = amount ? parseFloat(amount.value) : 0;
//     if (!amount || amountValue < 1 || isNaN(amountValue)) {
//       amountValue = 1;
//       if (amount) {
//         amount.value = "1";
//       }
//     }

//     if (fromCurr && toCurr) {
//       const URL: string = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//       let response = await fetch(URL);
//       let data = await response.json();
//       let rate = data[toCurr.value.toLowerCase()];
//       let finalAmount = amountValue * rate;
//       if (msg) {
//         msg.innerText = `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
//       }
//     }
//   });
// }
