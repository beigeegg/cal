const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const numbers = document.querySelectorAll(".num");
const display = document.querySelector("#display");
const answer = document.querySelector(".answer");
const reset = document.querySelector(".ac");
let tempNum = "";
let temp = [];
let isMinus = false;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    tempNum = tempNum + e.target.innerText;
    if (display.innerText === "0") {
      display.innerText = tempNum;
    } else {
      display.innerText = tempNum;
    }
  });
});
plus.addEventListener("click", (e) => {
  temp.push(Number(tempNum));
  tempNum = "";
  display.innerText = display.innerText + " " + e.target.innerText;
  isMinus = false;
});
minus.addEventListener("click", (e) => {
  temp.push(Number(tempNum));
  tempNum = "";
  display.innerText = display.innerText + " " + e.target.innerText;
  isMinus = true;
});
reset.addEventListener("click", () => {
  display.innerText = 0;
  tempNum = "";
  temp = [];
});
answer.addEventListener("click", () => {
  if (isMinus) {
    temp.push(Number(tempNum) * -1);
  } else {
    temp.push(Number(tempNum));
  }

  tempNum = temp.reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  });
  temp = [];
  display.innerText = tempNum;
});
