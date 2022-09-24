"use strict";

// const firstEl = document.querySelector(".first");
const firstEl = document.getElementById("first");
const secondEl = document.querySelector(".second");
const thirdEl = document.querySelector(".third");
const fourthEl = document.querySelector(".fourth");
const fifthEl = document.querySelector(".fifth");
const billEl = document.querySelector(".bill-value");
const customEl = document.querySelector(".custom");
const peopleEL = document.querySelector(".number-of-people");

const reset = document.querySelector(".reset");

// input fields
const bill = Number(billEl.value);
const numberOfPeople = Number(peopleEL.value);
const custom = Number(customEl.value);

// result
const tipAmountEl = document.querySelector(".price-1");
const totalPerPersonEl = document.querySelector(".price-2");

// LOOOOOOOOOOOOOOOOOOOOP
// const bills = [0.05, 0.1, 0.15, 0.25, 0.5];
// const values = document.querySelectorAll(".h");

// const y = function () {
//   const tip = bills * bill;

//   const tipPerPerson = tip / numberOfPeople;
//   const totalPerPerson = (tip + bills) / numberOfPeople;

//   totalPerPersonEl.textContent = totalPerPerson;
//   tipAmountEl.textContent = tipPerPerson;
// };

// for (let i = 0; i < values.length; i++) {
//   values[i].addEventListener("click", y);
// }
// ENDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD

//

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const bill = Number(billEl.value);
    const numberOfPeople = Number(peopleEL.value);
    const custom = Number(customEl.value);
    const tip = bill * (custom / 100);

    const tipPerPerson = tip / numberOfPeople;
    const totalPerPerson = (tip + bill) / numberOfPeople;

    // const tipPerPerson = Math.trunc(tip / numberOfPeople);
    // const totalPerPerson = Math.trunc((tip + bill) / numberOfPeople);

    totalPerPersonEl.textContent = `$${totalPerPerson.toFixed(2)}`;
    tipAmountEl.textContent = `$${tipPerPerson.toFixed(2)}`;
  }
});
// MATH.TRUNC WILL REMOVE ALL THE DECIMAL NUMBERS ANT RETURN AN INTEGER
// .toFixed(n) will return n figures after decimal point

// INITIAL CODE................................
firstEl.addEventListener("click", function () {
  const bill = Number(billEl.value);
  const numberOfPeople = Number(peopleEL.value);
  const tip = bill * 0.05;

  const tipPerPerson = tip / numberOfPeople;
  const totalPerPerson = (tip + bill) / numberOfPeople;

  totalPerPersonEl.textContent = `$${totalPerPerson.toFixed(2)}`;
  tipAmountEl.textContent = `$${tipPerPerson.toFixed(2)}`;
  // if (numberOfPeople === 0) {
  //   peopleEL.value.textContent = `Can't be zero`;
  // }
});

// alert(`I'm a girl`);
// DID NOT WORKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
// firstEl.addEventListener("click", function () {
//   if (numberOfPeople !== 0) {
//     const bill = Number(billEl.value);
//     const numberOfPeople = Number(peopleEL.value);
//     const tip = bill * 0.05;

//     const tipPerPerson = tip / numberOfPeople;
//     const totalPerPerson = (tip + bill) / numberOfPeople;

//     totalPerPersonEl.textContent = `$${totalPerPerson.toFixed(2)}`;
//     tipAmountEl.textContent = `$${tipPerPerson.toFixed(2)}`;
//   } else if (numberOfPeople === 0) {
//     const peopleEL = document.querySelector(".number-of-people");
//     peopleEL.value = alert(`Can't be zero`);
//     numberOfPeople.textContent = alert(`Can't be zero`);
//   }
// });
// ENDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD

secondEl.addEventListener("click", function () {
  const bill = Number(billEl.value);
  const numberOfPeople = Number(peopleEL.value);
  const tip = bill * 0.1;

  const tipPerPerson = tip / numberOfPeople;
  const totalPerPerson = (tip + bill) / numberOfPeople;

  totalPerPersonEl.textContent = `$${totalPerPerson.toFixed(2)}`;
  tipAmountEl.textContent = `$${tipPerPerson.toFixed(2)}`;
});

thirdEl.addEventListener("click", function () {
  const bill = Number(billEl.value);
  const numberOfPeople = Number(peopleEL.value);
  const tip = bill * 0.15;

  const tipPerPerson = tip / numberOfPeople;
  const totalPerPerson = (tip + bill) / numberOfPeople;

  totalPerPersonEl.textContent = `$${totalPerPerson.toFixed(2)}`;
  tipAmountEl.textContent = `$${tipPerPerson.toFixed(2)}`;
});

fourthEl.addEventListener("click", function () {
  const bill = Number(billEl.value);
  const numberOfPeople = Number(peopleEL.value);
  const tip = bill * 0.25;

  const tipPerPerson = tip / numberOfPeople;
  const totalPerPerson = (tip + bill) / numberOfPeople;

  totalPerPersonEl.textContent = `$${totalPerPerson.toFixed(2)}`;
  tipAmountEl.textContent = `$${tipPerPerson.toFixed(2)}`;
});

fifthEl.addEventListener("click", function () {
  const bill = Number(billEl.value);
  const numberOfPeople = Number(peopleEL.value);
  const tip = bill * 0.5;

  const tipPerPerson = tip / numberOfPeople;
  const totalPerPerson = (tip + bill) / numberOfPeople;

  totalPerPersonEl.textContent = `$${totalPerPerson.toFixed(2)}`;
  tipAmountEl.textContent = `$${tipPerPerson.toFixed(2)}`;
});

// ENDDDDDDDDDDDD................................

reset.addEventListener("click", function () {
  billEl.value = "";
  totalPerPersonEl.textContent = `$0.00`;
  tipAmountEl.textContent = `$0.00`;
  peopleEL.value = "";
  customEl.value = "";
});

// Functionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
// const finalOutput = function () {
//   const bill = Number(billEl.value);
//   const numberOfPeople = Number(peopleEL.value);
//   const tip = bill * 0.05;

//   const tipPerPerson = tip / numberOfPeople;
//   const totalPerPerson = (tip + bill) / numberOfPeople;

//   totalPerPersonEl.textContent = `$${totalPerPerson}`;
//   tipAmountEl.textContent = `$${tipPerPerson}`;
// };
// firstEl.addEventListener("click", finalOutput);
// ENDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
