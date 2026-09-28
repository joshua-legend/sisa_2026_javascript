const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  console.log("니가 만들어");
});
const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", () => {
  alert("오늘 점심은 돈치킨입니다!");
});

const square = document.querySelector(".square");
square.addEventListener("click", () => {
  const box = document.createElement("div");
  box.style.cssText = "width:100px; height:100px; background-color:red;";
  document.body.append(box);
});

const heart = document.querySelector(".heart");
heart.addEventListener("click", () => {
  heart.innerHTML = heart.innerHTML == "💔" ? "❤️" : "💔";
});

/* - 0 + */

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const num = document.querySelector(".num");
plus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML + 1;
});
minus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML - 1;
});
