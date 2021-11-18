let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let plusFunction = function () {
  console.log(plus.innerText);
};

plus.addEventListener("click", plusFunction);
