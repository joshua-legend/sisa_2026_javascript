// string boolean number uedefined
// array,obj,fun,math,date // window,documenent,element[div,button,img], event[click,dbclick,...]
const btn = document.querySelector(".dropdown");

const func = () => {
  const list = document.querySelector(".list");
  list.classList.toggle("noShow");
  list.classList.toggle("show");

  const chevron = document.querySelector("#dropdown_chevron");
  chevron.classList.toggle("down");
};

btn.addEventListener("click", func);

const test = document.querySelector(".test");
test.addEventListener("click", (event) => {
  console.log("클릭");
  console.log(event);
});
