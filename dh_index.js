const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const numbers = document.querySelectorAll(".num");
const display = document.querySelector("#display");
const answer = document.querySelector(".answer");
const reset = document.querySelector(".ac");
let temp = [];

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    temp.push(e.target.innerText);
    display.innerText = e.target.innerText;
  });
});
plus.addEventListener("click", (event) => {
  display.innerText = e.target.innerText;
  temp[temp.length - 1] = temp[temp.length - 1] * 1;
  console.log(temp);
});
minus.addEventListener("click", (e) => {
  display.innerText = e.target.innerText;
  temp[temp.length - 1] = temp[temp.length - 1] * -1;
});
reset.addEventListener("click", () => {
  display.innerText = 0;
  temp = [];
});
answer.addEventListener("click", () => {
  display.innerText = temp.reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  });
});
